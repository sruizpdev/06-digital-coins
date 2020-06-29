import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const useCoin = (label, initialState, options) => {
  const [state, updateState] = useState(initialState);
  const SelectCoin = () => (
    <Fragment>
      <label>{label}</label>
      <select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">--Select coin--</option>
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
  return [state, SelectCoin, updateState];
};

export default useCoin;
