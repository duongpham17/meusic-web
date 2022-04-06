import {useEffect} from 'react';

/**
 * @param {requestCallback} api - GET request function only
 * @param {*} response - requestCallback will return a value, this value will make sure the useEffect is run once.
*/

const useApiGet = (api, response) => {

  useEffect(() => {
    if(!response) api();
  }, [api, response]);

  return null;
};

export default useApiGet;
