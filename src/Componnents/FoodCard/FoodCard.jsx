import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
    const { image, name, recipe, price,_id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();
    const handleAddToCart = (food) => {
          if(user && user.email){
            // 
            const cartItem = {
              menuId: _id,
              email:user.email,
              name,
              image,
              price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
              console.log(res.data)
              if(res.data.insertedId){
                alert('add to cart successfully')
              }
              
            })
            // refatch the cart
            refetch();
          }
          else{
            Swal.fire({
              title: "you are not logged in",
              text: "please login to add to the cart",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "login"
            }).then((result) => {
              if (result.isConfirmed) {
                // send the login page
                navigate('/signin',{state:{from:location}})
              }
            });
          }
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="absolute top-3 right-5 bg-black text-white px-6 py-2 rounded"> ${price} </p>
        <p> {recipe} </p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
