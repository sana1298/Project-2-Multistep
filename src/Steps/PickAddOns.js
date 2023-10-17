import { Box, Button, Checkbox, Typography } from "@mui/material";
// import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import { useForm } from "../context/FormContext";

const PickAddOns = ({ nextStep, previousStep }) => {
  const { selectedAddOns, setSelectedAddOns,toggle,costMonthly,costYearly } =useForm(FormContext);

  const handleChange = (event, addOn) => {
    if (event.target.checked) {
      setSelectedAddOns([...selectedAddOns, addOn]);
    } else {
      setSelectedAddOns(
        selectedAddOns.filter((selected) => selected !== addOn)
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          // backgroundColor: "green",
          width: 500,
          height: 430,
          mt: 4,
          textAlign: "left",
          ml: 10,
        }}
      >
        <Typography variant="h4" sx={{ color: "indigo" }}>
          Pick add-ons
        </Typography>
        <Typography variant="p">
          Add-ons help enhance your gaming experience.
        </Typography>

        <Box
          sx={{
            display: "flex",
            border: "2px solid indigo",
            width: 400,
            height: 60,
            borderRadius: 2,
            mt: 2,
          }}
        >
          <Box>
            <Checkbox
              checked={selectedAddOns.includes("Online Service")}
              onChange={(event) => handleChange(event, "Online Service")}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          <Box>
            <Typography variant="h6">Online Service</Typography>
            <Typography variant="p">Access to multiplayer games</Typography>
          </Box>
          {toggle?<Typography varient="p">${costYearly.OnlineService}/yr</Typography >:<Typography varient="p">${costMonthly.OnlineService}/mo</Typography>}

        </Box>
        <Box
          sx={{
            display: "flex",
            border: "2px solid indigo",
            width: 400,
            height: 60,
            borderRadius: 2,
            mt: 2,
          }}
        >
          <Box>
            <Checkbox
              checked={selectedAddOns.includes("Larger Storage")}
              onChange={(event) => handleChange(event, "Larger Storage")}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          <Box>
            <Typography variant="h6">Larger Storage</Typography>
            <Typography variant="p">Extra 1TB of cloud save</Typography>
          </Box>
          {toggle?<Typography varient="p">${costYearly.LargerStorage}/yr</Typography >:<Typography varient="p">${costMonthly.LargerStorage}/mo</Typography>}
        </Box>
        <Box
          sx={{
            display: "flex",
            border: "2px solid indigo",
            width: 400,
            height: 60,
            borderRadius: 2,
            mt: 2,
          }}
        >
          <Box>
            <Checkbox
              checked={selectedAddOns.includes("Customizable Profile")}
              onChange={(event) => handleChange(event, "Customizable Profile")}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          <Box>
            <Typography variant="h6">Customizable Profile</Typography>
            <Typography variant="p">Custom theme on your profile</Typography>
          </Box>
          {toggle?<Typography varient="p">${costYearly.CustomizableProfile}/yr</Typography >:<Typography varient="p">${costMonthly.CustomizableProfile}/mo</Typography>}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{ mt: 5, color: "indigo", border: "none" }}
            variant="outlined"
            onClick={previousStep}
          >
            Go Back
          </Button>
          <Button
            sx={{ mt: 5, ml: 30, backgroundColor: "indigo" }}
            variant="contained"
            onClick={nextStep}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PickAddOns;
