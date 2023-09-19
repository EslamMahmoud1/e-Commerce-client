import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import validation from "../utills/validation";

export const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    setErrors(validation(values));

    //post request
  };

  useEffect(() => {
    console.log(values);
    console.log(errors);
  }, [values, errors]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <Typography>SignUp</Typography>
      <Box>
        <FormControl fullWidth sx={{ mt: "1rem", mb: "1rem" }}>
          <TextField
            label="Name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          ></TextField>
          {errors.name && (
            <Typography sx={{ color: "red", fontSize: "small" }}>
              {errors.name}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mt: "1rem", mb: "1rem" }}>
          <TextField
            label="E-mail"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          ></TextField>
          {errors.email && (
            <Typography sx={{ color: "red", fontSize: "small" }}>
              {errors.email}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mt: "1rem", mb: "1rem" }}>
          <TextField
            label="Password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          ></TextField>
          {errors.password && (
            <Typography sx={{ color: "red", fontSize: "small" }}>
              {errors.password}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mt: "1rem", mb: "1rem" }}>
          <TextField label="Confirm Password"></TextField>
        </FormControl>
      </Box>
      <Box>
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
