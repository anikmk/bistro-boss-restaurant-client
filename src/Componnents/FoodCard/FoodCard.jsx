const FoodCard = ({item}) => {
    const { image, name, recipe, price } = item;
    console.log(image)

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
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
