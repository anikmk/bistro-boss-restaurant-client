import Button from "../../../Componnents/Button/Button";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './feature.css'
const Feature = () => {
    return (
        <section className=" featureBg text-white">
            <div className="bg-black py-14 bg-opacity-70">
            <SectionTitle
            Heading="Check It Out"
            subHadding="form our menu"
            >
            </SectionTitle>
            <div className="flex justify-center items-center gap-x-14 px-52 py-14">
                <div><img className="rounded" src={featureImg} alt="" /></div>
                <div>
                    <p>March, 20, 2023</p>
                    <h5 className="uppercase font-bold text-xl my-2">whre can i get some</h5>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut placeat iste eveniet asperiores nisi deserunt qui laudantium maiores quaerat temporibus, est, libero numquam. Fugiat aliquid quisquam voluptas autem consequatur.</p>
                    <Button
                    button="order now"
                    >
                    </Button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Feature;