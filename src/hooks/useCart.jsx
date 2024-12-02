import React from "react";
import useAxiousSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  //tanstack query
  const axiousSecure = useAxiousSecure();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiousSecure.get("/cart");
      return res.data;
    },
  });

  return [cart];
};

export default useCart;
