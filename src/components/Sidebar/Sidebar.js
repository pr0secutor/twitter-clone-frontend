import { Box, Flex, HStack, IconButton, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineTwitter,AiFillSetting,AiFillHome} from 'react-icons/ai'
import {BsBookmarks,BsBell,BsEnvelopeFill,BsCardList} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {FaHashtag} from 'react-icons/fa'
import NavItem from './NavItem'

const Sidebar = () => {
  return (
    <Flex
    as='nav'
    pos={'fixed'}
    height={'100vh'}
    width={'270px'}
    ml={'100px'}
    zIndex={1}
    flexDirection={'column'}
    justifyContent={'space-between'}
    p={6}
    >
    <HStack justifyContent={'center'} mt={4}>
    <IconButton
    fontSize={30}
    variant={'ghost'}
    colorScheme='twitter'
    aria-label='Search database'
    isRound='true'
    icon={<AiOutlineTwitter />}
    />
    </HStack>
    <Flex flexDirection={'column'} mt={10}>
        <NavItem icon={AiFillHome} title='Home' />
        <NavItem icon={FaHashtag} title='Explore' />
        <NavItem icon={AiFillSetting} title='Settings' />
        <NavItem icon={BsBell} title='Notifications' />
        <NavItem icon={BsEnvelopeFill} title='Messages' />
        <NavItem icon={BsBookmarks} title='Bookmarks' />
        <NavItem icon={BsCardList} title='Lists' />
        <NavItem icon={CgProfile} title='Profile' />
    </Flex>
    <Spacer/>
    </Flex>
  )
}

export default Sidebar