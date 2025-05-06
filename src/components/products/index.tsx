"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../product.card";

// import _api 
import { _api } from "../../utils/_api";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://food-story.onrender.com/api/products`
        );
        setProducts(response.data.data); 
        setLoading(false); 
      } catch (error) {
        console.error("API Error:", error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div id="product" className="w-full bg-white py-28">
      <div className="container flex flex-col gap-6">
        <h1
          className="text-5xl max-xl:text-2xl text-[#333] text-start max-xl:text-center"
          title="Цифры о нас"
        >
          {"Ассортимент продукции"}
        </h1>
        <p className="text-[17px] max-xl:text-[16px] text-[#333] text-start max-xl:text-center max-xl:pb-10">
          {"Мы предлагаем свыше 14 тысяч наименований продуктов питания, доступных к заказу по оптовой стоимости уже сегодня"}
        </p>
      </div>
      <div className="container grid grid-cols-3 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-x-8 gap-y-28 max-md:gap-y-28 items-center py-20">
        {products?.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
