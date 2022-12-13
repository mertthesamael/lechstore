import { Box, Button, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BasketItem from "../../components/BasketItem/BasketItem";
import { LechContext } from "../../store/context";
import styles from "./checkout.module.scss";

const Checkout = () => {
  const { user } = useContext(LechContext);
  console.log(user)
  const navigate = useNavigate();
  let total=0;

  

  useEffect(() => {
    if (user.loggedIn == false) {
      return navigate("/login");
    }
    console.log("test");
  }, [user]);
console.log(user.basket)
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__wrapper}>
        <Box
          display="flex"
          overflow="auto"
          p="0 1rem"
          flexDir="column"
          gap="5rem"
          h="100%"
          w="75%"
          textAlign={user?.basket?.length>0?'':"center"}
        >
          {user?.basket?.length>0?user?.basket?.map((item) => (
            <BasketItem item={item} />
          )):<Text color='white' fontSize='1.5rem'>You have nothing in your basket. So <NavLink style={{textDecoration:'underline'}} to='/products'>go shopping</NavLink>, i guess?</Text>}
        </Box>
        <Box borderLeft="3px solid white" display='flex' flexDir='column'  h='100%' w="25%">
        <Box h='100%'>

         <Flex p='1rem'>
            <Checkbox marginRight='1rem'></Checkbox>
            <Text fontSize='1.5rem'>I've accepted the things that i need to accept</Text>
         </Flex>
         <Flex p='1rem'>
         <Checkbox marginRight='1rem'></Checkbox>
            <Text fontSize='1.5rem'>I've accepted the things that i need to accept</Text>
         </Flex>
        </Box>
        <Box borderTop='2px solid white' h='100%' display='flex' flexDir='column' m='2rem'justifyContent='space-evenly'>
          <Text fontSize='1.5rem' color='white'>{user.total+" TRY"}</Text>
            <Button h='4rem'>Pay</Button>
            <Button h='4rem'><Image marginRight='1rem' h='20px'src={require("../../assets/metamask.png")}/>Pay With Crypto</Button>
        </Box>
        </Box>
      </div>
    </div>
  );
};

export default Checkout;
