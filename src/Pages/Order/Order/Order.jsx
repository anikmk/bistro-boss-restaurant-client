import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderImg} title='order menu'></Cover>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
            <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;