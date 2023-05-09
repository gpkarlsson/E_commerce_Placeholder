import { useState } from 'react';
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  Button,
} from '@chakra-ui/react';

import { Link } from "react-router-dom";
const steps = [
  { title: 'Checkout', description: 'Cart Contents' },
  { title: 'Shipping', description: 'Shipping' },
  { title: 'Billing', description: 'Payment' },
  { title: 'Confirmation', description: 'Confirmation' },
];

export default function CheckoutStepper() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <Box>
            <p>Step 1 content</p>
            <Link to='/shipping'>
            <Button onClick={handleNext}>Next</Button>
            </Link>
          </Box>
        );
      case 2:
        return (
          <Box>
            <p>Step 2 content</p>
            <Link to='/checkout'>
            <Button onClick={handlePrev}>Cart Contents</Button>
            </Link>
            <Link to='/billing'>
            <Button onClick={handleNext}>Shipping</Button>
            </Link>
          </Box>
        );
      case 3:
        return (
          <Box>
            <p>Step 3 content</p>
            <Link to='/shipping'>
            <Button onClick={handlePrev}>Shipping</Button>
            </Link>
            <Link to='/confirmation'>
            <Button onClick={handleNext}>Confirmation</Button>
            </Link>
          </Box>
        );
      case 4:
        return (
          <Box>
            <p>Order Confirmation</p>
            <Button onClick={handlePrev}>Previous</Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Stepper size="lg" index={activeStep - 1}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index + 1)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      {renderStepContent()}
    </Box>
  );
}