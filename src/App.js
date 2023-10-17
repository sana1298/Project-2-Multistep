import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import PersonalInfo from "./Steps/PersonalInfo";
import SideBar from "./Steps/SideBar";
import SelectYourPlan from "./Steps/SelectYourPlan";
import PickAddOns from "./Steps/PickAddOns";
import FinishingUp from "./Steps/FinishingUp";
import ThankYou from "./Steps/ThankYou";

function App() {
  const steps = [
    { step: "STEP 1", info: "YOUR INFO" },
    { step: "STEP 2", info: "SELECT PLAN" },
    { step: "STEP 3", info: "ADD_ONS" },
    { step: "STEP 4", info: "SUMMARY" },
  ];
 
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);

  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo nextStep={nextStep} />;
      case 1:
        return <SelectYourPlan nextStep={nextStep} previousStep={previousStep} />;
      case 2:
        return <PickAddOns nextStep={nextStep} previousStep={previousStep} />;
      case 3:
        return <FinishingUp nextStep={nextStep} previousStep={previousStep} />;
      case 4:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <>
      <Paper
        sx={{
          backgroundColor: 'white',
          width: 800,
          height: 450,
          mt: 9,
          ml: 32,
          display: 'flex',
        }}
      >
        <Box>
        <SideBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
         </Box>
        <Box>{renderStep()}</Box>
      </Paper>
    </>
  );
}

export default App;

