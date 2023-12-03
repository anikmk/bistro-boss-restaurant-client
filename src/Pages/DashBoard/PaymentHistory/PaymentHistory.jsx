
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey:['payments',user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            payment history {payments.length}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Price</th>
        <th>Transection Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {
            payments.map((payment,index)=> <tr key={payment._id}>
                <th> {index + 1} </th>
                <td> ${payment.price} </td>
                <td> { payment.transectionId } </td>
                <td> {payment.status} </td>
              </tr>)
        }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;