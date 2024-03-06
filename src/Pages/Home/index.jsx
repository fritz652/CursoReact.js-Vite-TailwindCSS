import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import dataJson from "../../Data/data.json"; // se importa el json cuando esta dentro del archivo

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(dataJson); // cuando se usa json dentro del archivo no se usa fetch
    /* Codigo comentado que iria si se usa una api en la nuve */
    /* fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data)); */
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
