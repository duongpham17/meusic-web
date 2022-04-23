import {useState, useEffect} from 'react'

const useApiUpdate = () => {
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => setLoading(false);
    }, []);

    const request = async (callback) => {
        setLoading(true);
        await callback;
        setLoading(false);
    }

    return {
        loading,
        setLoading,
        request
    }
}

export default useApiUpdate;