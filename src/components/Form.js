import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCryptoCoin from '../hooks/useCryptoCoin';
import Axios from 'axios';
import Error from './Error';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ saveCoin, saveCryptoCoin }) => {
  const [listCrypto, saveCrypto] = useState([]);

  const [error, saveError] = useState(false);
  const COINS = [
    { code: 'USD', name: 'Dolar USA' },
    { code: 'EUR', name: 'Euro' },
    { code: 'PLN', name: 'Zloty' },
  ];
  const [coin, SelectCoin] = useCoin('Choose your coin', '', COINS);

  const [cryptoCoin, SelectCrytoCoin] = useCryptoCoin(
    'Select Crypto Coin',
    '',
    listCrypto
  );

  useEffect(() => {
    const getApiData = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await Axios.get(url);
      saveCrypto(result.data.Data);
    };
    getApiData();
  }, []);

  const calcCoin = (e) => {
    e.preventDefault();
    if (coin === '' || cryptoCoin === '') {
      saveError(true);
      return;
    }
    saveError(false);
    saveCoin(coin);
    saveCryptoCoin(cryptoCoin);
  };

  return (
    <form onSubmit={calcCoin}>
      {error ? <Error message="All fields are required" /> : null}
      <SelectCoin />
      <SelectCrytoCoin />
      <Button type="submit" value="Calc" />
    </form>
  );
};

export default Form;
