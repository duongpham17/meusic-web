import React from 'react';

import {BsFillSkipEndFill} from 'react-icons/bs';

import Dropdown from '../components/Dropdown';

export const Next = (props) => {

  const {next} = props;
  
  return (
    <Dropdown button={
      <button type="button" aria-label="Next" onClick={next}>
        <BsFillSkipEndFill/>
      </button>
    } />
  );
};

export default Next;
  