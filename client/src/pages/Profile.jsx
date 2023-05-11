import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";

import { CalendarIcon, EmailIcon, InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import { faker } from '@faker-js/faker';

import Footer from '../components/Footer'

export default function Profile() {

  const randomName = faker.name.fullName();
  const randomEmail = faker.internet.email();
  const randomStreetAddress = faker.address.streetAddress();
  const randomCity = faker.address.city();
  const randomStateAbbr = faker.address.stateAbbr();
  const randomZipCode = faker.address.zipCode();
  const productName = faker.commerce.productName();
  // const productDescription = faker.commerce.productDescription();
  const productAdjective = faker.commerce.productAdjective();
  const productPrice = faker.commerce.price(100, 200, 0, '$');
  // const randomOrderDate = faker.date.past();
  // const randomBirthDate = faker.date.birthdate();


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
                Name: {randomName}
              </ListItem>
              <ListItem>
                <ListIcon as={CalendarIcon} />
                Birthdate:
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} />
                Email: {randomEmail}
              </ListItem>
              <ListItem>
                <ListIcon as={InfoIcon} />
                Billing Address: {randomStreetAddress}, {randomCity}, {randomStateAbbr}, {randomZipCode}
              </ListItem>
              <ListItem>
                <ListIcon as={InfoOutlineIcon} />
                Shipping Address: {randomStreetAddress}, {randomCity}, {randomStateAbbr}, {randomZipCode}
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <List spacing={4}>
              <ListItem>
                Last Order: {productAdjective} {productName} {productPrice}
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
