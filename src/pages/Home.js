import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import TweetCard from "../components/TweetCard";
import { BsSearch } from "react-icons/bs";
import CurrentEventsCard from "../components/CurrentEventsCard";

const Home = () => {
  return (
    <Box ml={"370px"}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        maxWidth={"1100px"}
        pt={2}
      >
        <Flex maxWidth={"650px"}>
          <TweetCard
            username={"Elon Tusk"}
            twitter_handle={"@Elon_Tusk"}
            time_stamp={"5h"}
            tweet_content={
              "I wish spaceX was never born.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }
          />
        </Flex>
        <Flex height={'60vh'} width={"30%"} flexDirection={'column'} justifyContent={'space-between'}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
            />
            <Input type="text" placeholder="Search" borderRadius={"50px"} />
          </InputGroup>
          <CurrentEventsCard/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
