
import SectionTitle from "../../../../Componnents/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItem/MenuItems";
import useMenu from "../../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu([])
    const popular = menu.filter(item=>item.category == 'popular')
    return (
        <section>
            <SectionTitle
            Heading="From Our Menu"
            subHadding="Popular Items"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 w-[80%] mx-auto my-12">
                {
                    popular.map(item=><MenuItems
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