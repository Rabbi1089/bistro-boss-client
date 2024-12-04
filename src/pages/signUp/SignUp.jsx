import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousPublic from "../../hooks/useAxiousPublic";
import SocialLogin from "../../components/social login/SocialLogin";

const SignUp = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const axiousPublic = useAxiousPublic();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const currentUser = result.user;
        updateUserProfile(data.name, data.ImgUrl).then(() => {
          setUser(currentUser);
          const userInfo = {
            name: data.name,
            email: data.email,
          };

          axiousPublic.post("user", userInfo).then((res) => {
            if (res.data.insertedId) {
              navigate('/')
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "account created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SIgnUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("ImgUrl")}
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    Password must be 6 character
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600" role="alert">
                    Password must be less than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600" role="alert">
                    Password must have 1 uppercase , 1 lowercase , 1 number ,
                    special character
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  SignUp
                </button>
                <SocialLogin/>
                <p className=" text-sm text-orange-500 mt-3 text-center">
                  already have a account ?
                  <Link to="/login">
                    <span className=" text-orange-800 m-2">Login Here</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
