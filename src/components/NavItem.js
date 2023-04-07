import { Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as DOMLink} from 'react-router-dom' 

const NavItem = ({icon,title,path}) => {
  return (
    <Menu placement='right'>
            <Link
            w={'100%'}
            p={3}
            m={1.5}
            borderRadius={30}
            _hover={{backgroundColor:'#f0f1f7'}}
            as={DOMLink}
            to={`/${path}`}
            >
                <MenuButton>
                    <Flex ml={3} alignItems='center'>
                        <Icon as={icon} boxSize={8} color={'black'}/>
                        <Text ml={4} fontSize={'xl'} color={'black'}>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>
  )
}

export default NavItem