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
import {
  AiFillApple,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const response = { success: true, token: "abcd" }; //API Call
    if (!response.success) {
      alert("Invalid Credentials");
    }
    localStorage.setItem("token", response.token);
  };
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const forgotHandler = (e) => {
    e.preventDefault();
    console.log("abc");
    navigate("/forgot");
  };
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
          <Heading>Sign In to Twitter</Heading>
        </Box>
        <Box my={4} textAlign={"left"}>
          <Button leftIcon={<FcGoogle />} width="full" mt="4">
            Sign in with Google
          </Button>
          <Button leftIcon={<AiFillApple />} width="full" mt="6">
            Sign in with Apple
          </Button>
          <Box my={"5px"} textAlign={"center"} color={"#1DA1F2"}>
            ---------------OR---------------
          </Box>
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="test@mail.com"
              ></Input>
            </FormControl>
            <FormControl isRequired>
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
                    onClick={handleClick}
                    color={"#1DA1F2"}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
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
          <Button
            borderRadius={"15px"}
            background={"#EDF2F7"}
            color={"#1DA1F2"}
            width={"full"}
            mt={4}
            onClick={forgotHandler}
          >
            Forgot Password
          </Button>
          <div style={{ marginTop: "10px" }}>
            Dont have an account?{" "}
            <Link as={ReactLink} to="/signup" color={"#1DA1F2"}>
              Sign up
            </Link>
          </div>
        </Box>
      </Box>
    </Center>
  );
};
export default SignIn;
