import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
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
                    {/* divider */}
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
                </ul>
            </div>
            <div className="flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;