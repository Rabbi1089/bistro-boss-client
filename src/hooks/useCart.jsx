
import useAxiousSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import useAuth from "./useAuth";

const useCart = () => {
  //tanstack query
  const axiousSecure = useAxiousSecure();
  const {user} = useAuth()
  console.log(user);
  console.log(user);
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
