import { Box, Button, Typography } from '@mui/material';
import FormContext from '../context/FormContext';
import {useForm} from '../context/FormContext';



const FinishingUp = ({ nextStep , previousStep }) => {
  const { selectedAddOns,selectPlan,toggle } = useForm(FormContext);
  
  const handleGoBackToSelectPlan = () => {
    previousStep(); 
  };

  return (
    <>
     <Box
        sx={{
          width: 500,
          height: 430,
          mt:1,
          textAlign:'left',
          ml:4
        }}
      >
        <Typography variant='h4' sx={{color:'indigo'}}>Finishing up</Typography>
        <Typography variant='p'>Double check everything looks OK before confirming.</Typography>
        <Box sx={{mt:4,backgroundColor:'#78a2f5',p:3,borderRadius:5}}>
        <Typography variant='p'>{selectPlan}</Typography><br/>
        {toggle?(<Typography variant='p'>(Yearly)</Typography>):(<Typography variant='p'>(Monthly)</Typography>)}<br/>
        <Typography variant='p' sx={{textDecoration:'underline'}}
        onClick={handleGoBackToSelectPlan}
        >Change</Typography>
         <hr></hr>
              {selectedAddOns.map((addon, index) => (
                <Typography key={index}>
                  {addon} 
                </Typography>
              ))}
            
        </Box>
        <Typography variant='p'>Total:</Typography>

        

        <Box sx={{display:'flex'}}>
          <Button sx={{mt:10,color:'indigo',border:'none'}} variant="outlined" onClick={previousStep}>
            Go Back
          </Button>
          <Button sx={{mt:10,ml:30,backgroundColor:'indigo'}} variant="contained" onClick={nextStep}>
            Next Step
          </Button>
        </Box>
      </Box>
   </>
  )
}

export default FinishingUp