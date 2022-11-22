import React from 'react'
import { Alert, AlertIcon } from "@chakra-ui/react"

const Error = ({ message }) => {
    return (
        <Alert status='error' position={"fixed"} bottom={'4'} left={'0%'}
            transform={'translateX(-50%'} w={'500'}>
            <AlertIcon />
            {message}
        </Alert>
    )
}

export default Error
