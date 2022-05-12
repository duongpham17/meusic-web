import {useEffect} from 'react';

/**
 * @param { callback } clean - function that contains all the useStates that needs to be cleaned up.
*/

const useUseEffectCleanUp = (clean) => {

    useEffect(() => {
        return () => clean
    }, [clean]);

    return null
}

export default useUseEffectCleanUp