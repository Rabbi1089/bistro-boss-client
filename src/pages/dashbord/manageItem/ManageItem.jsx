import React from "react";
import SectionTitle from "../../../components/section title/SectionTitle";
import { Helmet } from "react-helmet-async";
import UseMenu from "../../../hooks/UseMenu";
import { RiH1 } from "react-icons/ri";

const ManageItem = () => {
  const [menu] = UseMenu();
  //toDo : manage delete and update option
  return (
    <div>
      <Helmet>
        <title>Admin | Manage Item</title>
      </Helmet>
      <SectionTitle
        heading="manage all item"
        subHeading="hurry up"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item image</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item , idx) => (
              <tr key={item._id}>
                <th>{idx+1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
