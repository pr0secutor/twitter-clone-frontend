import {
  Avatar,
  Card,
  CardBody,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineTwitter, AiFillSetting, AiFillHome } from "react-icons/ai";
import {
  BsBookmarks,
  BsBell,
  BsEnvelopeFill,
  BsCardList,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaHashtag } from "react-icons/fa";
import NavItem from "./NavItem";

const Sidebar = () => {

  const [isSmallThan1200] = useMediaQuery('(max-width: 1280px)')

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loggedIn"));
    setLoggedIn(data);
  }, []);

  return (
    <>
      {loggedIn && (
        <Flex
          display={{base:'none',sm:'flex'}}
          as="nav"
          pos={"fixed"}
          height={"100vh"}
          width={isSmallThan1200?'140px':"270px"}
          ml={{xl:'20px','2xl':'140px'}}
          zIndex={1}
          flexDirection={"column"}
          justifyContent={"space-between"}
          p={6}
          alignItems={'center'}
        >
          <HStack justifyContent={"center"} mt={4}>
            <IconButton
              fontSize={30}
              variant={"ghost"}
              colorScheme="twitter"
              aria-label="Search database"
              isRound="true"
              icon={<AiOutlineTwitter />}
            />
          </HStack>
          <Flex flexDirection={"column"} mt={10}>
            <NavItem icon={AiFillHome} isSmaller={isSmallThan1200} title="Home" path='home'/>
            <NavItem icon={FaHashtag} isSmaller={isSmallThan1200} title="Explore" />
            <NavItem icon={AiFillSetting} isSmaller={isSmallThan1200} title="Settings" />
            <NavItem icon={BsBell} isSmaller={isSmallThan1200} title="Notifications" />
            <NavItem icon={BsEnvelopeFill} isSmaller={isSmallThan1200} title="Messages" />
            <NavItem icon={BsBookmarks} isSmaller={isSmallThan1200} title="Bookmarks" />
            <NavItem icon={BsCardList} isSmaller={isSmallThan1200} title="Lists" />
            <NavItem icon={CgProfile} isSmaller={isSmallThan1200} title="Profile" />
          </Flex>
          <Spacer />

          <Card p={0} boxShadow={"none"} width={isSmallThan1200?'fit-content':'100%'}>
            <Flex justifyContent={"space-between"}>
              <Avatar
                size={"md"}
                src={
                  "https://pbs.twimg.com/profile_images/1644671353344360448/LUyKOs7e_400x400.jpg"
                }
                alt="Profile pic"
              />
              {!isSmallThan1200&&<VStack spacing={0} alignItems={"flex-start"}>
                <Text size={"sm"}>Fahim Iqbal</Text>
                <Link href='#'>
                  <Text as="b" size={"sm"}>
                    @depressed_guy
                  </Text>
                </Link>
              </VStack>}
            </Flex>
          </Card>
        </Flex>
      )}
    </>
  );
};

export default Sidebar;
