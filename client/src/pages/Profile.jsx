import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";

import { EmailIcon, InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color: "white", bg: "purple.400", transition: "0.2s"}}>Account Info</Tab>
        <Tab _selected={{color: "white", bg: "purple.400", transition: "0.2s"}}>Task History</Tab>
      </TabList>
    
      <TabPanels>
          <TabPanel>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={EmailIcon} />
                Email: lorem@ipsum.dev
              </ListItem>
              <ListItem>
                <ListIcon as={InfoIcon} />
                Billing Address: Lorem, ipsum.
              </ListItem>
              <ListItem>
                <ListIcon as={InfoOutlineIcon} />
                Shipping Address: Lorem, ipsum.
              </ListItem>
            </List>
          </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
