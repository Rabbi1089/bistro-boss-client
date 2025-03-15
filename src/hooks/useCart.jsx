
import useAxiousSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const {user , loading} = useAuth()
  //tanstack query
  const [axiousSecure] = useAxiousSecure();
 
  const { refetch , data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiousSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  return [cart , refetch];
};

export default useCart;
