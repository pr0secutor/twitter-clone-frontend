import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CurrentEventsCard = () => {
  return (
    <Card boxShadow={"none"} borderRadius={'16px'} backgroundColor={"#F7F9F9"} pt={0} pb={4}>
      <Heading size={"md"} p={5}>
        What's happening
      </Heading>
      <VStack spacing={0}>
        <Item
          trend={"Trending in India"}
          hashtag={"#Jawan"}
          no_of_tweets={"10k"}
        />
        <Item
          trend={"Trending in India"}
          hashtag={"#AmmarJawan"}
          no_of_tweets={"20k"}
        />
        <Item
          trend={"Trending in India"}
          hashtag={"#Namo"}
          no_of_tweets={"20k"}
        />
        <Item
          trend={"Trending in India"}
          hashtag={"#Adani"}
          no_of_tweets={"18k"}
        />
        <Item
          trend={"Trending in India"}
          hashtag={"#Reliance"}
          no_of_tweets={"26k"}
        />
      </VStack>
    </Card>
  );
};

const Item = ({ trend, hashtag, no_of_tweets }) => {
  return (
    <VStack
      width={"full"}
      alignItems={"flex-start"}
      spacing={0}
      pt={3}
      pb={3}
      pl={5}
      _hover={{
        backgroundColor: "#EFF1F1",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <Text fontSize={"sm"}>{trend}</Text>
      <Text as="b" fontSize={"sm"}>
        {hashtag}
      </Text>
      <Text fontSize={"sm"}>{no_of_tweets} Tweets</Text>
    </VStack>
  );
};

export default CurrentEventsCard;
