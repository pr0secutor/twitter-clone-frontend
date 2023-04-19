import {
  Avatar,
  Card,
  CardBody,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiComment } from "react-icons/bi";
import { AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
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
            src={profile_pic}
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
                variant={"ghost"}
                colorScheme="gray"
                aria-label="comments"
                icon={<BiComment />}
                _hover={{ backgroundColor: "#e4eef5", color: "#1D9BF0" }}
              />
              <IconButton
                isRound="true"
                variant={"ghost"}
                colorScheme="gray"
                aria-label="likes"
                icon={<AiFillHeart />}
                _hover={{ backgroundColor: "#F9E3EB", color: "#F91680" }}
              />
              <IconButton
                isRound="true"
                variant={"ghost"}
                colorScheme="gray"
                aria-label="retweets"
                icon={<AiOutlineRetweet />}
                _hover={{ backgroundColor: "#E3F1EB", color: "#03BA7D" }}
              />
              <IconButton
                isRound="true"
                variant={"ghost"}
                colorScheme="gray"
                aria-label="views"
                icon={<IoMdStats />}
                _hover={{ backgroundColor: "#e4eef5", color: "#1D9BF0" }}
              />
            </Flex>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TweetCard;
