import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li>
                    <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>
                    Admin Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils>
                    Add Items
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/manageItems'> <FaList></FaList>
                    Manage Items
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/bookings'> <FaBook></FaBook>
                    Manage Bookings
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/users'> <FaUser></FaUser>
                    All users
                    </NavLink>
                    </li>
                        </> : <>
                        <li>
                    <NavLink to='/dashboard/userHome'> <FaHome></FaHome>
                    User Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar>
                    Reservation
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/review'> <FaAd></FaAd>
                    Review
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/bookings'> <FaAd></FaAd>
                    Bookings
                    </NavLink>
                    </li>
                        </>
                    }
                    {/* divider */}
                    {/* shared menu items */}
                    <div className="divider"></div>
                    <li>
                    <NavLink to='/'> <FaHome></FaHome>
                     Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/order/salad'> <FaSearch></FaSearch>
                     Menu
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/order/contact'> <FaEnvelope></FaEnvelope>
                     Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;