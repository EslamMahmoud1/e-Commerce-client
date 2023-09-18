import { useEffect, useState } from "react";

import Product from "../components/Product";
import { Grid } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);

  //fetching data
  useEffect(() => {
    console.log("About to make API request...");
    fetch("http://localhost:3000/api/v1/product/")
      .then((response) => response.json())
      .then((data) => setProducts(data.allProducts))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-[100%] h-[200px]">
      <div>
        <Grid container>
          {products.map((product) => (
            <Grid key={product._id} md={6} lg={6}>
              <Product key={product._id} data={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default Home;
