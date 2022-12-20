import React, { useState } from 'react'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Checkbox } from '@chakra-ui/react'
import axios from "axios"
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
   
    FormControl,
    FormHelperText,
    InputRightElement,
    Image,
  } from "@chakra-ui/react";
  const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export const Register = () => {
  const [name ,setName] = useState("")
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [resetPassword ,setResetPassword] = useState("")
  
  const handleSubmit=()=>{
    if(name && email && password && resetPassword){
      if(password === resetPassword){
        const param ={name , email ,password ,resetPassword}
      axios({
        method: 'post',
        url: 'http://localhost:5000/posts',
        data: param
      });
      }else{
        alert("password did not match")
      }
      
    }else{
      alert("input fields are mandotry")
    }
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
         
       
        <Heading marginBottom="50px" >Create Account</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={8}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="your name"
                    onChange={(e)=>setName(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="your email address"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="Retype Password"
                    onChange={(e)=>setResetPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" >
                      
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  
                </FormHelperText>
              </FormControl>
              <Checkbox fontWeight="light"  >I agree all statements in Terms of service </Checkbox>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                 
              >
                SIGNUP
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      
    </Flex>
  );
  
}
