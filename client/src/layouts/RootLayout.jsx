// @ts-check
import React from 'react'
// @ts-ignore
import { Grid, GridItem, Flex} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"


export default function RootLayout() {
  return (
   
    <Grid bg="#2a2d2f">
    {/* main content & navbar */}
    <GridItem as={Flex} justify="center" align="center">
      <Flex direction="column" maxWidth="1600px" width={{ base: '90vw', md: '80vw', lg: '90vw' }}>
        <Navbar />
        <Outlet />
      </Flex>
    </GridItem>
  </Grid>
)
}

    
  