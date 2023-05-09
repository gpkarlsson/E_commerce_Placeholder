import React from 'react'
import Stepper from '../components/Stepper'
import { Button } from '@chakra-ui/react'
// import { Form } from 'react-router-dom'
// import {activeStep} from '../components/Stepper.jsx'

export default function Checkout() {
  return (
    <>
      <Stepper />
     
      <Button>Continue</Button>
      {/* On click, button should advance the step and return next page */}
    </>
  )
}
