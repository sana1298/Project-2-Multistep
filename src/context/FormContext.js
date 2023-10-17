import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const[toggle,setToggle]=useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [monthly,setMonthly]=useState({
    arcade:9,
    advanced:12,
    pro:15
  });
  const[yearly,setYearly]=useState({
    arcade:90,
    advanced:120,
    pro:150
  })
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const[selectPlan,setSelectPlan] = useState({
    Arcade:false,
    Advanced:false,
    Pro:false,
  });
 
  const [costMonthly,setCostMonthly]=useState({
    OnlineService: 1,
    LargerStorage: 2,
    CustomizableProfile: 2,
  })
  const [costYearly,setCostYearly]=useState({
    OnlineService: 10,
    LargerStorage: 20,
    CustomizableProfile: 20,
  })

  return (
    <FormContext.Provider
    value={{
      formData,
      setFormData,
      formErrors,
      setFormErrors,
      selectedAddOns,
      setSelectedAddOns,
      monthly,
      setMonthly,
      yearly,
      setYearly,
      costMonthly,
      setCostMonthly,
      costYearly,
      setCostYearly,
      selectPlan,
      setSelectPlan,
      toggle,
      setToggle
    }}
     >{children}</FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};

export default FormProvider;