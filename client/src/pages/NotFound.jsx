import { Link } from "react-router-dom";

import { Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to='/'>
        <Text fontSize="40px">
        Home
          </Text>
          </Link><br />
      <Link to='/profile'>
        <Text fontSize="40px">
        Profile
        </Text>
        </Link>
      {/* <Link to='/contact'>Contact</Link> */}
    </div>
  )
}