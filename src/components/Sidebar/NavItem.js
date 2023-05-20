import { Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as DOMLink} from 'react-router-dom' 

const NavItem = ({icon,title,path,isSmaller}) => {
  return (
    <Menu placement='right'>
            <Link
            w={'fit-content'}
            p={2.5}
            // ml={8}
            borderRadius={30}
            _hover={{backgroundColor:'#f0f1f7'}}
            as={DOMLink}
            to={`/${path}`}
            >
                <MenuButton>
                    <Flex mr={4} ml={2} alignItems='center'>
                        <Icon as={icon} boxSize={8} color={'black'}/>
                        {!isSmaller&&<Text ml={4} fontSize={'xl'} color={'black'}>{title}</Text>}
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>
  )
}

export default NavItem