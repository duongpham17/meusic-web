import React from 'react';

import {BsFillSkipStartFill} from 'react-icons/bs';

import Dropdown from '../dropdown';

export const Next = (props) => {

  const {previous} = props;
  
  return (
    <Dropdown button={
      <button type="button" aria-label="Previous" onClick={previous}>
        <BsFillSkipStartFill/>
      </button>
    } />
  );
};

export default Next;
  