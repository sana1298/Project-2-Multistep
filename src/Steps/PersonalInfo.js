import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import { useForm } from "../context/FormContext";

// const nameRegex = /^[A-Za-z\s]+$/;
// const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// const phoneRegex = /^[0-9]+$/;

const PersonalInfo = ({ nextStep }) => {
  // const { formData, formErrors, setFormData, setFormErrors } = useForm();

  // const validateForm = () => {
  //   let valid = true;

  //   if (!nameRegex.test(formData.name)) {
  //     setFormErrors({ ...formErrors, name: "Invalid name" });
  //     valid = false;
  //   } else {
  //     setFormErrors({ ...formErrors, name: "" });
  //   }

  //   if (!emailRegex.test(formData.email)) {
  //     setFormErrors({ ...formErrors, email: "Invalid Email" });
  //     valid = false;
  //   } else {
  //     setFormErrors({ ...formErrors, email: "" });
  //   }

  //   if (!phoneRegex.test(formData.phone)) {
  //     setFormErrors({ ...formErrors, phone: "Invalid Phone Number" });
  //     valid = false;
  //   } else {
  //     setFormErrors({ ...formErrors, phone: "" });
  //   }

  //   return valid;
  // };

  const handleNextStep = () => {
    // if (validateForm()) {
      nextStep();
    // }
  };

  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 430,
          mt: 3,
          textAlign: "left",
          ml: 8,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ color: "indigo" }}>
            Personal Info
          </Typography>
          <Typography variant="p">
            Please provide your name, email address, and phone number.
          </Typography>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Box>
              <InputLabel>Name</InputLabel>
              <TextField
                sx={{
                  width: 350,
                }}
                placeholder="e.g. Stephen King"
                variant="outlined"
                // value={formData.name}
                // onChange={(e) => setFormData("name", e.target.value)}
              />
              {/* {formErrors.name && (
                <Typography variant="caption" color="error">
                  {formErrors.name}
                </Typography>
              )} */}
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <InputLabel>Email Address</InputLabel>
              <TextField
                sx={{
                  width: 350,
                }}
                variant="outlined"
                placeholder="e.g. stephenking@lorem.com"
                // value={formData.email}
                // onChange={(e) => setFormData("email", e.target.value)}
              />
              {/* {formErrors.email && (
                <Typography variant="caption" color="error">
                  {formErrors.email}
                </Typography>
              )} */}
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <InputLabel>Phone Number</InputLabel>
              <TextField
                sx={{
                  width: 350,
                }}
                variant="outlined"
                placeholder="e.g. +1234567890"
                // value={formData.phone}
                // onChange={(e) => setFormData("phone", e.target.value)}
              />
              {/* <Typography variant="caption" color="error">
                {formErrors.phone}
              </Typography> */}
            </Box>
          </Box>
        </Box>
        <Box sx={{ ml: 40, mt: 2 }}>
          <Button
            sx={{ backgroundColor: "indigo" }}
            variant="contained"
            onClick={handleNextStep}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PersonalInfo;
