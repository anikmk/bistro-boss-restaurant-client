import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY; 
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

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
      const menuRes = await axiosSecure.post('/menu',menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        reset();
        alert('your item added')
      }
    }
    console.log('with image url',res.data);
  };

  return (
    <div>
      <SectionTitle
        Heading="add an items"
        subHadding="whats new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name?</span>
            </label>
            <input
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
                defaultValue='default'
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
              {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control w-full my-6">
                <input {...register("image")} type="file" className="file-input w-full mx-w-xs" />
            </div>
          <button className="btn">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
