import {
  Box,
  CardMedia,
  Step,
  // StepButton,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Sidebar from "../images/bg-sidebar-desktop.svg";

const SideBar = ({ steps, activeStep }) => {
  return (
    <>
      <Box>
        <CardMedia
          sx={{
            backgroundImage: `url(${Sidebar})`,
            width: 210,
            height: 430,
            ml: 2,
            mt: 1,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Stepper nonLinear activeStep={activeStep} sx={{display:'flex',flexDirection:'column'}}>
              {steps.map((label) => {

                return (
                  <Step key={label}>
                    <StepLabel sx={{mx:3,mt:3}}>{label.step}</StepLabel>
                    <Typography variant="p" sx={{ml:4,}}
                    >{label.info}</Typography>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
        </CardMedia>
      </Box>
    </>
  );
};
export default SideBar;

