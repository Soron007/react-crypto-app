import React from 'react'
import { Avatar, Box, Stack, VStack, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'}
            color={'whiteAlpha.700'} minH={'48'} px={'16'}
            py={['16', '8']}
        >
            <Stack direction={['column', 'row']}
                h={'full'} alignItems={'center'}>

                <VStack w={'full'} alignItems={['center', 'flex-start']}  >
                    <Text fontWeight={'bold'} textDecoration={'underline'}>ABOUT US</Text>
                    <Text fontWeight={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>We cannot tell you about us</Text>

                </VStack>

                <VStack>
                    <Avatar boxSize={'20'} mt={['4', '0']}>

                    </Avatar>
                    <Text>Anonymous </Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
