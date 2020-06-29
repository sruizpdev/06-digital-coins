import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCryptoCoin = (label, initialState, options) => {
  //   console.log(options);

  const [state, updateState] = useState(initialState);
  const SelectCryptoCoin = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">--Select coin--</option>
        {options.map((opt) => (
          <option key={opt.CoinInfo.Id} value={opt.CoinInfo.Name}>
            {opt.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  return [state, SelectCryptoCoin, updateState];
};

export default useCryptoCoin;
