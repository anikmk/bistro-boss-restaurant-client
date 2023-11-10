const MenuItems = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-2">
      <div className="mr-2">
        <img className="w-[100px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
      </div>
      <div>
        <h2 className="uppercase text-black font-medium"> {name}--------- </h2>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <div className="text-[#BB8506]">
        ${price}
      </div>
    </div>
  );
};

export default MenuItems;
