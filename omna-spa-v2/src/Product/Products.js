import React, { useContext } from "react";
import { OMNAContext } from "../Utils/OMNAContext";

const Products = () => {
  const a = useContext(OMNAContext);
  console.log(a);
  return <h1>hello word</h1>;
};

export default Products;
