import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:stats=[]} = useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })
    return (
        <div>
            <h2>well come 

                {
                   user?.displayName ? user.displayName : 'back'
                }
            </h2>

            {/* stats */}
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value"> ${stats.revenue} </div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUser></FaUser>
    </div>
    <div className="stat-title"> Users</div>
    <div className="stat-value"> {stats.users} </div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUser></FaUser>
    </div>
    <div className="stat-title"> Menu Items</div>
    <div className="stat-value"> {stats.menuItems} </div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value"> {stats.orders} </div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;