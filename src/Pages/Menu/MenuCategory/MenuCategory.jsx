import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItem/MenuItems";



const MenuCategory = ({item,coverImg,title}) => {
    
    return (
       <div>
        {title && <Cover title={title} img={coverImg}></Cover>}
         <div className="grid md:grid-cols-2 gap-6 w-[80%] mx-auto my-12">
                {
                    item.map(item=><MenuItems
                    key={item._id}
                    item={item}
                    >
                    </MenuItems>)
                }
            </div>
       </div>
    );
};

export default MenuCategory;