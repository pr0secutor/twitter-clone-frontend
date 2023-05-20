import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  HStack,
  IconButton,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { BsFiletypeGif, BsEmojiSmile } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";

const AddTweetCard = () => {
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
        <Flex justifyContent={'space-between'}>
          <Avatar
            mr={2}
            size="md"
            name="Ryan Florence"
            src={
              "https://pbs.twimg.com/profile_images/1644671353344360448/LUyKOs7e_400x400.jpg"
            }
          />
          <VStack spacing={0} w={'88%'}>
            <Textarea mb={3} size={'md'} resize={'none'} placeholder="What is happening?!" borderWidth={0} _focus={{outline:'none !important'}}/>
            <Flex w='100%' justifyContent='space-between'>
                <ButtonGroup variant={"ghost"} colorScheme="twitter" aria-label="comments">
                <IconButton isRound="true" icon={<AiOutlinePicture />} />
                <IconButton isRound="true" icon={<BsFiletypeGif/>} />
                <IconButton isRound="true" icon={<BiPoll />} />
                <IconButton isRound="true" icon={<BsEmojiSmile />} />
                </ButtonGroup>
                <Button size={'md'} colorScheme='twitter' variant='solid' borderRadius={'20px'}>
                    Tweet
                </Button>
            </Flex>
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AddTweetCard;
