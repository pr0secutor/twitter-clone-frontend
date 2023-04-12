import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link as ReactLink } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [confirmPass, setConfirmPass] = useState("");
  const [phone,setPhone] = useState();

  const submitHandler =(e) =>{
    e.preventDefault();
    console.log(email,name,password,confirmPass,phone);
  }

  return (
    <Center
      width="full"
      height={"100vh"}
      align="center"
      justifyContent={"center"}
    >
      <Box p={2}>
        <Box textAlign={"center"}>
          <AiOutlineTwitter
            color={"#1DA1F2"}
            size="4rem"
            style={{ display: "inline" }}
          />
          <Heading>Sign up for Twitter</Heading>
        </Box>
        <Box my={4} textAlign={"left"}>
          <form onSubmit={(e)=>submitHandler(e)}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired isInvalid={false}>
              <FormLabel>Password</FormLabel>
              <InputGroup size={"md"}>
                <Input
                  pr={"4.5rem"}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                ></Input>
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={(e) => setShow(!show)}
                    color={"#1DA1F2"}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              ></Input>
            </FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type='number' placeholder="0123456789" value={phone} onChange={(e)=>setPhone(e.target.value)}></Input>
            <Button
              borderRadius={"15px"}
              background={"#1DA1F2"}
              color={"#FFF"}
              width={"full"}
              mt={4}
              type="submit"
            >
              Submit
            </Button>
          </form>
          <div style={{ marginTop: "10px" }}>
            Already have an account?{" "}
            <Link as={ReactLink} to="/signin" color={"#1DA1F2"}>
              Sign in
            </Link>
          </div>
        </Box>
      </Box>
    </Center>
  );
};

export default SignUp;
