import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import Advanced from "../images/icon-advanced.svg";
import Arcade from "../images/icon-arcade.svg";
import Pro from "../images/icon-pro.svg";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormContext from "../context/FormContext";
import { useForm } from "../context/FormContext";
const SelectYourPlan = ({ nextStep, previousStep }) => {
  const { monthly, yearly, toggle, setToggle,selectPlan,setSelectPlan } = useForm(FormContext);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // const handleNextStep = () => {
  //   if (selectPlan.Arcade || selectPlan.Advanced || selectPlan.Pro) {
  //     nextStep(); 
  //   } else {
  //     console.log("Please select a plan before moving to the next step.");
  //   }
  // };
  
  const handlePlanChange = (plan) => {
    setSelectPlan(plan);
  };

  const handleNextStep = () => {
    if (selectPlan) {
      nextStep(); // Move to the next step
    } else {
      console.log("Please select a plan before moving to the next step.");
    }
  }
  console.log(selectPlan);
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 430,
          mt: 3,
          textAlign: "left",
          ml: 10,
        }}
      >
        <Typography variant="h4" sx={{ color: "indigo" }}>
          Select your plan
        </Typography>
        <Typography variant="p">
          You have the option of monthly or yearly billing.
        </Typography>
        <Box sx={{ display: "flex", mt: 4 }}>
          <Box
            sx={{
              border: "2px solid indigo",
              width: 100,
              height: 130,
              borderRadius: 2,
              p: 1,
              cursor: "pointer",
              backgroundColor: selectPlan.Arcade ? "#b0d6f5" : "transparent",
            }}
            // onClick={(e)=>setSelectPlan({...selectPlan,Arcade:true})}
            onClick={() => handlePlanChange("Arcade")}
          >
            <CardMedia
              sx={{
                backgroundImage: `url(${Arcade})`,
                width: 50,
                height: 50,
              }}
            ></CardMedia>
            <Typography varient="h5">Arcade</Typography>
            {toggle ? (
              <Typography varient="p">${yearly.arcade}/yr</Typography>
            ) : (
              <Typography varient="p">${monthly.arcade}/mo</Typography>
            )}
            {toggle ? <Typography variant="p">2 months free</Typography> : ""}
          </Box>
          <Box
            sx={{
              border: "2px solid indigo",
              width: 100,
              height: 130,
              ml: 3,
              borderRadius: 2,
              p: 1,
              cursor: "pointer",
              backgroundColor: selectPlan.Advanced ? "#b0d6f5" : "transparent",

            }}
            // onClick={(e)=>setSelectPlan({...selectPlan,Advanced:true})}
            onClick={() => handlePlanChange("Advanced")}
          >
            <CardMedia
              sx={{
                backgroundImage: `url(${Advanced})`,
                width: 50,
                height: 50,
              }}
            ></CardMedia>
            <Typography varient="h5">Advanced</Typography>
            {toggle ? (
              <Typography varient="p">${yearly.advanced}/yr</Typography>
            ) : (
              <Typography varient="p">${monthly.advanced}/mo</Typography>
            )}
            {toggle ? <Typography variant="p">2 months free</Typography> : ""}
          </Box>
          <Box
            sx={{
              border: "2px solid indigo",
              width: 100,
              height: 130,
              ml: 3,
              borderRadius: 2,
              p: 1,
              cursor: "pointer",
              backgroundColor: selectPlan.Pro ? "#b0d6f5" : "transparent",
            }}
            // onClick={(e)=>setSelectPlan({...selectPlan,Pro:true})}
            onClick={() => handlePlanChange("Pro")}

          >
            <CardMedia
              sx={{
                backgroundImage: `url(${Pro})`,
                width: 50,
                height: 50,
              }}
            ></CardMedia>
            <Typography varient="h5">Pro</Typography>
            {toggle ? (
              <Typography varient="p">${yearly.pro}/yr</Typography>
            ) : (
              <Typography varient="p">${monthly.pro}/mo</Typography>
            )}
            {toggle ? <Typography variant="p">2 months free</Typography> : ""}
          </Box>
        </Box>
        <Box
          sx={{
            border: "2px solid indigo",
            mt: 2,
            width: 406,
            height: 50,
            borderRadius: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ ml: 16, mt: 2 }}
            alignItems="center"
          >
            <Typography>Monthly</Typography>
            <AntSwitch
              checked={toggle}
              inputProps={{ "aria-label": "ant design" }}
              onClick={handleToggle}
            />
            <Typography>Yearly</Typography>
          </Stack>
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
            onClick={handleNextStep}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SelectYourPlan;
