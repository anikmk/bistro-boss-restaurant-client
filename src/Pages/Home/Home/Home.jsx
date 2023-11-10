import Banner from "../Banner/Banner";
import BistroBoss from "../Banner/BistroBoss";
import PopularMenu from "../Banner/PopularMenu/PopularMenu";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <div>
                <Category></Category>
                <BistroBoss></BistroBoss>
                <PopularMenu></PopularMenu>
                <Feature></Feature>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;