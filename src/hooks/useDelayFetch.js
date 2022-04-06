import {useEffect, useState} from 'react';

/**
 * @param {requestCallback} callback - Function that grabs data
 * @param {string} initalValue - starting value
*/

export const useDelayFetch = (callback, initalValue) => {

    const [value, setValue] = useState(initalValue || "");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(initalValue) setValue(initalValue);
    }, [initalValue]);

    useEffect(() => {

        if(value.length === 0) return;

        const timeout = setTimeout(async () => {
            setLoading(true);
            await callback(value);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [callback, value]);

    const onChange = (e) => setValue(e.target.value);

    const onClear = () => setValue("");

    return {
        value,
        loading, 
        setValue,
        onChange,
        onClear
    }
}
export default useDelayFetch