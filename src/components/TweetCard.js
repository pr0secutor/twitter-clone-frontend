import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";

const TweetCard = ({
  profile_pic,
  username,
  twitter_handle,
  time_stamp,
  tweet_content,
  pic_src,
}) => {
  return (
    <Card
      height={"fit-content"}
      boxShadow={"none"}
      border={"solid"}
      borderWidth={"1px"}
      borderColor={"#F0F4F5"}
      borderRadius={0}
    >
      <CardBody>
        <HStack alignItems={""} spacing={5}>
          <Avatar
            size="md"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <VStack alignItems={"flex-start"}>
            <HStack>
              <Text fontSize={"md"}>{username}</Text>
              <Text fontSize={"md"}>{twitter_handle}</Text>
              <Text fontSize={"sm"}>· {time_stamp}</Text>
            </HStack>
            <VStack spacing={1}>
              <Text fontSize={"md"}>{tweet_content}</Text>
              {pic_src && (
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              )}
            </VStack>
            <Flex
              flexDirection={"row"}
              justifyContent={"space-between"}
              width={"70%"}
            >
              <IconButton
                isRound="true"
                variant={"outline"}
                colorScheme="gray"
                aria-label="comments"
                icon={<BiComment />}
              />
              <IconButton
                isRound="true"
                variant={"outline"}
                colorScheme="gray"
                aria-label="likes"
                icon={<AiOutlineHeart />}
              />
              <IconButton
                isRound="true"
                variant={"outline"}
                colorScheme="gray"
                aria-label="retweets"
                icon={<AiOutlineRetweet />}
              />
              <IconButton
                isRound="true"
                variant={"outline"}
                colorScheme="gray"
                aria-label="views"
                icon={<IoMdStats />}
              />
            </Flex>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TweetCard;
