import {useState, useEffect} from 'react';

const useBasicForm = (initalState) => {
    const [value, setValue] = useState(initalState);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => setValue(
        typeof(initalState) === "object" 
            ? ({...value, [e.target.name] : e.target.value}) 
            : e.target.value
    );

    const onClear = () => setValue(initalState);

    const onSubmit = (callback) => async (e) => {
        e.preventDefault();
        if(loading) return;
        setLoading(true);
        await callback();
        setLoading(false);
    };

    const onStopPropagation = (e) => {
        e.stopPropagation();
    };

    useEffect(() => { 
        return () => setLoading(false);
    }, []);

    return {
        onChange,
        onSubmit,
        value,
        setValue,
        onClear,
        onStopPropagation,
        loading,
        setLoading,
    }
}

export default useBasicForm