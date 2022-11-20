import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { server } from '../index';
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchExchanges = async () => {
            const { data } = await axios.get(`${server}/exchanges`);


            setExchanges(data);
            setLoading(false);

        };
        fetchExchanges();
    }, [])



    return (
        <Container maxW={'container.xl'}>


            {loading ? <Loader /> : <>

                <HStack wrap={'wrap'}>
                    {
                        exchanges.map((exchange) => (
                            <ExchangeCard key={exchange.id} name={exchange.name} image={exchange.image} rank={exchange.trust_score_rank} url={exchange.url} />
                        ))
                    }
                </HStack>



            </>}
        </Container>
    )
}

const ExchangeCard = ({ name, image, rank, url }) => {
    return <a href={url} target={'blank'}>

        <VStack w={'52'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.3s'}
            m={'4'} css={{
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}>
            <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt={'Exchange'} />
            <Heading size={'md'} noOfLines={1}>{rank} </Heading>
            <Text noOfLines={1}>{name}</Text>
        </VStack>
    </a>
}

export default Exchanges;

