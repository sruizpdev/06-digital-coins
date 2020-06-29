import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCryptoCoin from '../hooks/useCryptoCoin';
import Axios from 'axios';

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

const Form = () => {
  const COINS = [
    { code: 'USD', name: 'Dolar USA' },
    { code: 'EUR', name: 'Euro' },
    { code: 'PLN', name: 'Zloty' },
  ];
  const [coin, SelectCoin] = useCoin('Choose your coin', '', COINS);

  const [crytoCoin, SelectCrytoCoin] = useCryptoCoin('Select Crypto Coin', '');

  useEffect(() => {
    const getApiData = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await Axios.get(url);
      console.log(result.data.Data);
    };
    getApiData();
  }, []);
  return (
    <form>
      <SelectCoin />
      <SelectCrytoCoin />
      <Button type="submit" value="Calc" />
    </form>
  );
};

export default Form;
