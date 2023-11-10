import serviceImg from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className="">
            <div className="relative">
                    <img src={serviceImg} alt="" />
                    <div className="absolute bg-white w-[50%] top-14 left-[25%] py-[90px] px-[120px]">
                        <h2 className="uppercase text-center mb-2 text-3xl">bistro boss</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
            </div>  
        </div>
    );
};

export default BistroBoss;