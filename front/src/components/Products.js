import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/produits")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des produits", error)
      );
  }, []);

  return (
    <>
      <Header />
      <div className="buypage bg-[#38383B] text-white flex flex-col gap-10 pt-24">
        <div className="content ">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
            Nos plantes
          </h1>
        </div>
        <div className="plant md:px-12 px-5 flex flex-col justify-center gap-10">
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((plant, index) => (
              <Link
                to={`/checkout?imageSrc=${encodeURIComponent(
                  plant.imageSrc
                )}&name=${encodeURIComponent(
                  plant.name
                )}&price=${encodeURIComponent(plant.price)}`}
              >
                <li
                  key={index}
                  className="flex flex-col gap-2 text-center text-xl cursor-pointer"
                >
                  <img src={plant.imageSrc} alt="" />
                  <h2>{plant.name}</h2>
                  <p> {plant.price}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
