import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Componnents/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladtImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item=>item.category === 'offered')
    const desserts = menu.filter(item=>item.category === 'dessert')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main menu */}
            <SectionTitle subHadding='do not miss' Heading='todays offer'></SectionTitle>
            {/* offers menu itmes */}
            <MenuCategory item={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory item={desserts} coverImg={dessertImg} title='dessert'></MenuCategory>
            <MenuCategory item={soup} title='soup' coverImg={soupImg}></MenuCategory>
            <MenuCategory item={pizza} title='pizza' coverImg={pizzaImg}></MenuCategory>
            <MenuCategory item={salad} title='salad' coverImg={saladtImg}></MenuCategory>
        </div>
    );
};

export default Menu;