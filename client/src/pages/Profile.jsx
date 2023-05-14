import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";

import { CalendarIcon, EmailIcon, InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";


import Footer from '../components/Footer'

export default function Profile() {

  return (
    <>
      <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
        <TabList>
          <Tab _selected={{ color: "white", bg: "brand.900", transition: "0.2s" }}>Account Info</Tab>
          <Tab _selected={{ color: "white", bg: "brand.900", transition: "0.2s" }}>Order History</Tab>
          <Tab _selected={{ color: "white", bg: "brand.900", transition: "0.2s" }}>My Items</Tab>

        </TabList>

        <TabPanels>
          <TabPanel>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={EmailIcon} />
                Name: Lorem Ipsum
              </ListItem>
              <ListItem>
                <ListIcon as={CalendarIcon} />
                Birthdate: 10/20/1950
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} />
                Email: lorem@ipsum.com
              </ListItem>
              <ListItem>
                <ListIcon as={InfoIcon} />
                Billing Address: Lorem ipsum dolor sit amet.
              </ListItem>
              <ListItem>
                <ListIcon as={InfoOutlineIcon} />
                Shipping Address: 123 Lorem Ipsum St
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <List spacing={4}>
              <ListItem>
                Last Order: 1 Lorem Ipsum
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <List spacing={4}>
              <ListItem>
               ITEMS GET DISPLAYED HERE
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  )
}
