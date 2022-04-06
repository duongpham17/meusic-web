import {useState, useEffect} from 'react';

export const useForm = (initalState, callback, validation, reset=false) => {

    const [edited, setEdited] = useState(false);

    const [values, setValues] = useState(initalState);

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const onChange = event => {
        setValues({...values, [event.target.name] : event.target.value});
        if(!edited) setEdited(true);
    };

    const onClear = () => {
        setValues(initalState);
        if(edited) setEdited(false);
    }

    useEffect(() => {
        return () => setLoading(false);
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault();

        if(loading) return;

        const errors = validation(values);

        const noErrors = Object.keys(errors).length === 0;

        if(noErrors) {
            setLoading(true);
            await callback();
            setLoading(false);
        };

        setErrors(errors);
        setEdited(false);
        if(reset) setValues(initalState);
    };

    return {
        values,
        setValues,
        errors,
        onChange, 
        onSubmit,
        setLoading,
        loading,
        edited,
        onClear
    }
}

export default useForm;