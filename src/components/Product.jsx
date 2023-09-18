import { Button, Grid, Rating, Typography } from "@mui/material";

export const Product = (props) => {
  const { name, price, rating, brand, image } = props.data;
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid>
        <img src={image} alt="" height={300} width={300} />
        <div className=" grid justify-items-center ">
          <Typography>Name:{name}</Typography>
          <Typography>Price:{price}</Typography>
          <Typography>Brand:{brand}</Typography>
          <Rating value={rating} />
          <Button variant="contained">Add To Cart</Button>
        </div>
      </Grid>
    </Grid>
  );
};
export default Product;
