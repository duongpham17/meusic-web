import React from 'react';

import useOpen from 'hooks/useOpen';

import Information from './overview';
import Sort from './sort';

export const Filter = () => {

  const {onOpen, open} = useOpen();

  return (
    <>
      <Information onOpen={onOpen} />
      <Sort onOpen={onOpen} open={open} />
    </>
  )
}

export default Filter