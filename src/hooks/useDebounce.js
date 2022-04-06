import {useEffect, useState} from 'react';

export const useDebounce = (callback, fallback) => {
    
    const [value, setValue] = useState("");

    const [loading, setLoading] = useState(false);

    const [start, setStart] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
        if(!start) setStart(true);
    }

    const onClear = () => setValue("");

    useEffect(() => {
        if(start) setLoading(true);

        const timeout = setTimeout(() => {
            if(value) callback(value);
            if(!value && start && fallback) {
                fallback();
                setStart(false);
            }
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [value, start, callback, fallback]);

    return {
        value, 
        setValue, 
        onChange, 
        loading, 
        onClear
    }
}
export default useDebounce