// @ts-check
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import {SlBasket, SlHome} from 'react-icons/sl'
import {FiUser} from 'react-icons/fi'
export default function Sidebar() {
  return (
    <List background='#24A4FA' boxShadow='xl' rounded='md'color="#0C1013" fontWeight="bold" fontSize="1.2em" spacing={8} border="1px solid red" >
        <ListItem _hover={{color: "brand.900", bg: "white", transition: "0.3s" }} rounded='md'>
            <NavLink to="/" >
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
        <ListItem _hover={{color: "brand.900", bg: "white", transition: "0.3s"}} rounded='md'>
            <NavLink to="/profile">
            <ListIcon as={FiUser} color="brand.400" />
                Profile        
            </NavLink>
        </ListItem>
        <ListItem _hover={{color: "brand.900", bg: "white", transition: "0.3s" }} rounded='md'>
            <NavLink to="/cart">
            <ListIcon as={SlBasket} color="brand.400" />
                Cart        
            </NavLink>
        </ListItem>
    </List>
  )
}


// POSSIBLE SIDEBAR - JSX
// import { useState } from 'react';
// import { Icon } from '@chakra-ui/react';
// import { FiMenu } from 'react-icons/fi';
// import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
// import { List, ListItem } from '@chakra-ui/react';
// import { NavLink } from 'react-router-dom';

// export default function Sidebar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Icon as={FiMenu} onClick={onOpen} />

//       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//         <DrawerOverlay>
//           <DrawerContent>
//             <DrawerCloseButton />

//             <DrawerHeader>Navigation</DrawerHeader>

//             <DrawerBody >
//               <List >
//                 <ListItem >
//                   <NavLink to="/">Home</NavLink>
//                 </ListItem>
//                 <ListItem>
//                   <NavLink to="/profile">Profile</NavLink>
//                 </ListItem>
//                 <ListItem>
//                   <NavLink to="/cart">Cart</NavLink>
//                 </ListItem>
//               </List>
//             </DrawerBody>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>
//     </>
//   );
// }


//POSSIBLE SIDEBAR - TYPESCRIPT
// import React, { ReactNode } from 'react';
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from 'react-icons/fi';
// import { IconType } from 'react-icons';
// import { ReactText } from 'react';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
///   { name: 'Settings', icon: FiSettings },
// ];

// export default function SimpleSidebar({ children }: { children: ReactNode }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {children}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}>
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// };