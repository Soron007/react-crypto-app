import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { server } from '../index';
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import CoinCard from './CoinCard';

const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('inr');


    const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'


    const changePage = (page) => {
        setPage(page);
        setLoading(true);


    }

    const btns = new Array(132).fill(1);

    useEffect(() => {

        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);


                setCoins(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);

            }


        };
        fetchCoin();
    }, [currency, page])




    if (error) {
        return <Error message={"Coins were blocked by Elon Musk from showing up on your face!"} />
    }
    return (
        <Container maxW={'container.xl'}>


            {loading ? <Loader /> : <>

                <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                    <HStack spacing={'4'}>
                        <Radio value={'inr'}>₹</Radio>
                        <Radio value={'eur'}>€</Radio>
                        <Radio value={'usd'}>$</Radio>

                    </HStack>
                </RadioGroup>

                <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                    {
                        coins.map((coin) => (
                            <CoinCard key={coin.id} price={coin.current_price} id={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} currencySymbol={currencySymbol} />
                        ))
                    }
                </HStack>

                <HStack w={'full'} overflowX={'auto'} p={'8'}>

                    {btns.map((btn, index) => (
                        <Button
                            key={index}
                            bgColor={'blackAlpha.900'}
                            color={'white'}
                            onClick={() => changePage(index + 1)}
                        >
                            {index + 1}
                        </Button>
                    ))
                    }
                </HStack>



            </>}
        </Container>
    )
}





export default Coins;
