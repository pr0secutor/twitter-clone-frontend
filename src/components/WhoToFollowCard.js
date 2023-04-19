import {
  Avatar,
  Button,
  Card,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const WhoToFollowCard = () => {
  return (
    <Card
      boxShadow={"none"}
      borderRadius={16}
      backgroundColor={"#F7F9F9"}
      pt={0}
      pb={4}
    >
      <Heading size={"md"} p={5}>
        Who to Folllow
      </Heading>
      <VStack spacing={4}>
        <Item
          profile_pic={
            "https://pbs.twimg.com/profile_images/1098244578472280064/gjkVMelR_400x400.png"
          }
          name={"The New York Times"}
          twitter_handle={"#nytimes"}
        />
        <Item
          profile_pic={
            "https://pbs.twimg.com/profile_images/1635032110531485696/e72TClKQ_400x400.jpg"
          }
          name={"Pope Francis"}
          hashtag={"#Pontifex"}
        />
      </VStack>
    </Card>
  );
};

const Item = ({ profile_pic, name, twitter_handle }) => {
  return (
    <HStack
      width={"full"}
      justifyContent={"space-between"}
      spacing={0}
      pt={1}
      pb={1}
      pl={5}
      pr={5}
      _hover={{
        backgroundColor: "#EFF1F1",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <Flex flexDirection={'row'}>
        <Avatar size={"md"} src={profile_pic} />
        <VStack alignItems={"flex-start"} ml={3}>
          <Text as="b" fontSize={"sm"}>
            {name}
          </Text>
          <Text fontSize={"sm"}>{twitter_handle}</Text>
        </VStack>
      </Flex>
      <Button backgroundColor={"#0F141A"} colorScheme="blackAlpha" size={"sm"}>
        Follow
      </Button>
    </HStack>
  );
};

export default WhoToFollowCard;
