import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './coins.png';
import Form from './components/Form';
import Result from './components/Result';
import Axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [coin, saveCoin] = useState('');
  const [cryptoCoin, saveCryptoCoin] = useState('');
  const [result, saveResult] = useState({});
  useEffect(() => {
    const calcCryptoCoin = async () => {
      if (coin === '') {
        return;
      }

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;

      const result = await Axios.get(url);
      saveResult(result.data.DISPLAY[cryptoCoin][coin]);
    };
    calcCryptoCoin();
  }, [coin, cryptoCoin]);

  return (
    <Container>
      <div>
        <Image src={image} alt="image bitcoin" />
      </div>
      <div>
        <Heading>Calc Digital Coins Price</Heading>
        <Form saveCoin={saveCoin} saveCryptoCoin={saveCryptoCoin} />

        <Result result={result} />
      </div>
    </Container>
  );
}

export default App;
