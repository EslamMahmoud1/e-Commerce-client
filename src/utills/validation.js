const validation = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Please Provide Name";
  if (!values.email) errors.email = "Please Provide E-mail";
  if (!values.password) errors.password = "Please Provide Password";
  else if (values.password.length < 8)
    errors.password = "Password Must be More than 8 Charcaters";
  return errors;
};
export default validation;
