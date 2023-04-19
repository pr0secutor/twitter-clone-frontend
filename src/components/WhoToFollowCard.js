import { Avatar, Card, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const WhoToFollowCard = () => {
  return (
    <Card boxShadow={'none'} backgroundColor={"#F7F9F9"} pt={4} pb={4}>
        <Heading size={"md"} p={3}>Who to Folllow</Heading>
        <VStack spacing={4}>
          <Item
            trend={"Trending in India"}
            hashtag={"#Jawan"}
            no_of_tweets={"20k"}
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
            no_of_tweets={"20k"}
          />
          <Item
            trend={"Trending in India"}
            hashtag={"#Reliance"}
            no_of_tweets={"20k"}
          />
        </VStack>
    </Card>
  );
};

const Item = ({ trend, hashtag, no_of_tweets }) => {
  return (
    <VStack width={"full"} alignItems={"flex-start"} spacing={0} pl={4} _hover={{backgroundColor:'#EFF1F1', cursor:'pointer', transition:'0.3s'}}>
      <Avatar />
      <Text as='b' fontSize={"sm"}>{hashtag}</Text>
      <Text fontSize={"sm"}>{no_of_tweets} Tweets</Text>
    </VStack>
  );
};

export default WhoToFollowCard