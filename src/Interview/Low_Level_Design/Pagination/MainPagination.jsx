import React, { useEffect, useState } from "react";
import { dummy_api_url } from "../../Constants";
import Card from "./Card";
import PageNumbers from "./PageNumbers";

const MainPagination = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const data = await fetch(dummy_api_url);
      const json = await data.json();
      setProducts(json?.products);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col h-screen items-center justify-around">
      <div className="flex flex-row flex-wrap justify-center">
        {products.slice(currPage * 10 - 10, currPage * 10).map((item, idx) => (
          <Card key={item?.id} imgUrl={item?.thumbnail} title={item?.title} />
        ))}
      </div>
      <PageNumbers currPage={currPage} setCurrPage={setCurrPage} />
    </div>
  );
};

export default MainPagination;
