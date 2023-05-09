import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import {SlBasket, SlHome} from 'react-icons/sl'
import {FiUser} from 'react-icons/fi'
export default function Sidebar() {
  return (
    <List color="brand.400" fontWeight="bold" fontSize="1.2em" spacing={8} border="1px solid red" >
        <ListItem _hover={{color: "brand.900", bg: "white", transition: "0.3s" }}>
            <NavLink to="/home" >
                <ListIcon as={SlHome} color="brand.100" />
                    Home              
            </NavLink>
        </ListItem>
        {/* <ListItem>
            <NavLink to="/create">
            <ListIcon as={EditIcon} color="brand.400" />
                New Task
            </NavLink>
        </ListItem> */}
        <ListItem _hover={{color: "brand.900", bg: "white", transition: "0.3s" }}>
            <NavLink to="/profile">
            <ListIcon as={FiUser} color="brand.400" />
                Profile        
            </NavLink>
        </ListItem>
        <ListItem _hover={{color: "brand.900", bg: "white", transition: "0.3s" }}>
            <NavLink to="/cart">
            <ListIcon as={SlBasket} color="brand.400" />
                Cart        
            </NavLink>
        </ListItem>
    </List>
  )
}