
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })  
        const handleDeleteUser = (user) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/users/${user._id}`)
                    .then(res=>{
                        if(res.data.deletedCount > 0){
                            refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        }
                    })
                }
              });
        }
    return (
        <div>
            <h2 className="text-3xl">All users </h2> 
            <h2 className="text-3xl">Total users  {users.length}</h2> 

            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Count</th>
        <th>Name</th>
        <th>Email</th>
        <th>Roll</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        users.map((user, index)=> <tr key={user._id}>
            <th> {index +1 } </th>
            <th> {user.name} </th>
            <td> {user.email} </td>
            <td>
                <button onClick={()=>handleDeleteUser(user)} className="btn bg-black"> <FaUser className="text-white"></FaUser> </button>  
            </td>

            <td>
                 <button onClick={()=>handleDeleteUser(user)} className="btn btn-danger"> <FaTrashAlt className="text-red-500"></FaTrashAlt> </button> 
            </td>
          </tr>
         )
     }
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;