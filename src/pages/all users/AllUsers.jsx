import React from "react";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiousSecure = useAxiousSecure();

  const { refetch, data: users = [] } = useQuery({
    //
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiousSecure.get("user");
      return res.data;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const id = user._id;
        axiousSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleAdminRule = (user) => {
    axiousSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div className="flex justify-evenly">
        <h1 className=" text-3xl uppercase">all user</h1>
        <h1 className=" text-3xl uppercase">Total user : {users.length}</h1>
      </div>
      <div className=" pt-5">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>User Rule</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {" "}
                    {user.role === "admin" ? (
                      <p className=" text-yellow-600 text-xl">Admin</p>
                    ) : (
                      <button
                        className="btn btn-ghost  bg-orange-500"
                        onClick={() => {
                          handleAdminRule(user);
                        }}
                      >
                        <FaUsers className="text-white"></FaUsers>
                      </button>
                    )}
                  </td>
                  <button
                    onClick={() => {
                      handleDelete(user);
                    }}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className=" text-red-500"></FaTrash>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
