import { useEffect, useState } from "react";
import SectionTitle from "../../../../Componnents/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItem/MenuItems";


const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menuData.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category == 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle
            Heading="From Our Menu"
            subHadding="Popular Items"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 w-[80%] mx-auto my-12">
                {
                    menu.map(item=><MenuItems
                    key={item._id}
                    item={item}
                    >
                    </MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;