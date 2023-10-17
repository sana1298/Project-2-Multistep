import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import Thank from "../images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 430,
          mt: 12,
          textAlign:'center',
          ml:4
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 50, height: 50,ml:29 }}
          image={Thank}
        />
        <Typography variant="h4" sx={{color:'indigo',mt:2}}>Thank you!</Typography>
        <Typography variant="p">
        Thanks for confirming your subscription!We hope you have<br/>fun using our platform.If you ever need support,please feel<br />free to email us at support email.
        </Typography>
      </Box>
    </>
  );
};

export default ThankYou;
