import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY; 
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name,category,recipe,price,_id} = useLoaderData();
    const { register, handleSubmit,reset } = useForm();

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    if(res.data.success){
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
      console.log(menuRes.data)
      if(menuRes.data.modifiedCount > 0){
        reset();
        alert('your item updated to the menu')
      }
    }
    console.log('with image url',res.data);
  };

    return (
        <div>
            <SectionTitle Heading='update an item' subHadding='refresh info'></SectionTitle>

        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name?</span>
            </label>
            <input
              defaultValue={name}
              type="text"
              {...register("name")}
              placeholder="Type recipe name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Categogy Name?</span>
              </label>
              <select
                defaultValue={category}
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
                  select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> Price*</span>
              </label>
              <input
                defaultValue={price}
                type="number"
                {...register("price")}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
           {/* recipe details */}
           <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe bio</span>
              </label>
              <textarea
              defaultValue={recipe}
              {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control w-full my-6">
                <input {...register("image")} type="file" className="file-input w-full mx-w-xs" />
            </div>
          <button className="btn">
            Updata menu Item
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;