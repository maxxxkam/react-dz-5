import React, { useMemo, useState } from "react";
import "./Hero.scss";
import { fetchData } from "../../api/getProducts";

const Hero = () => {
  const [data, setData] = useState([]);

  const f = useMemo(async () => {
    try {
      const response = await fetchData();
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            {data.map((product) => (
              <div key={product.id} className="hero__card">
                <div className="hero__text">
                  <h2>{product.title}</h2>
                  <h4>{product.price}</h4>
                </div>
                <p>{product.description}</p>
                <b>{product.category}</b>
                <img src={product.image} alt="" />
                <div>
                  <p>{product.rate}</p>
                  <p>{product.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
