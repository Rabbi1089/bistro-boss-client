import React from "react";
import SectionTitle from "../../../components/section title/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

const AddItem = () => {
  const axiosPublic = useAxiousPublic();
  const axiosSecure = useAxiousSecure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //api key from imagebb
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const onSubmit = async (data) => {
    // console.log(data);

    //image upload to imageBB and get url from it
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    //here imagebb give display url console.log(res.data);

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price:parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log('from menus', menuRes.data)
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been saved`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        subHeading="What's new?"
        heading="add an item"
      ></SectionTitle>
      <div className="">
        <section className="p-6 bg-gray-100 text-gray-900">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="col-span-full sm:col-span-3  ">
                <label htmlFor="name" className="text-lg">
                  Recipe name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Recipe name"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="Category" className="text-lg">
                    Category
                  </label>
                  <select
                    {...register("category", { required: true })}
                    className="select w-full max-w-lg"
                  >
                    <option disabled selected>
                      Category
                    </option>
                    <option value="salad">salad</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">soup</option>
                    <option value="dessert">dessert</option>
                    <option value="drinks">drinks</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg">
                    Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    {" "}
                    Recipe Details*
                  </label>
                  <textarea
                    {...register("recipe", { required: true })}
                    id="bio"
                    placeholder="recipe"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  ></textarea>
                </div>
                <div className="col-span-full sm:col-span-2">
                  <input
                    {...register("image")}
                    type="file"
                    className="file-input w-full max-w-xs"
                  />
                </div>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-active">
              Add item
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddItem;
