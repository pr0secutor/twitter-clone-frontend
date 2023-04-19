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
import WhoToFollowCard from "../components/WhoToFollowCard";

const Home = () => {
  return (
    <Box ml={"370px"}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        maxWidth={"1050px"}
        pt={2}
      >
        <Flex maxWidth={"650px"} flexDirection={'column'}>
          <TweetCard
            profile_pic={'https://bit.ly/ryan-florence'}
            username={"Elon Tusk"}
            twitter_handle={"@Elon_Tusk"}
            time_stamp={"5h"}
            tweet_content={
              "I wish spaceX was never born.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }
          />
          <TweetCard
            profile_pic={'https://pbs.twimg.com/profile_images/1581464502746238978/88EWeHhx_400x400.jpg'}
            username={"Elon Tusk"}
            twitter_handle={"@Elon_Tusk"}
            time_stamp={"5h"}
            tweet_content={
              "I wish spaceX was never born.Lorem ipsum dolor sit amet, c dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }
          />
          <TweetCard
            profile_pic={'https://pbs.twimg.com/profile_images/1569366733164781571/CMRmSSFp_400x400.jpg'}
            username={"Elon Tusk"}
            twitter_handle={"@Elon_Tusk"}
            time_stamp={"5h"}
            tweet_content={
              "I wish spaceX was never born.Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }
          />
        </Flex>
        <Flex height={'90vh'} width={"35%"} flexDirection={'column'} justifyContent={'space-between'} pr={3}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
            />
            <Input type="text" placeholder="Search" borderRadius={"50px"} />
          </InputGroup>
          <CurrentEventsCard/>
          <WhoToFollowCard/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
