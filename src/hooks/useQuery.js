import { useLocation, useNavigate } from 'react-router-dom';

const useSearchQuery = () => {
    const [location, navigate] = [useLocation(), useNavigate()];

    const setQuery = (params, value) => {
        const {search} = location;

        const emptyParams = !search.length;

        if(emptyParams) {
            navigate(`?${params}=${value}`);

            return `?${params}=${value}`;
        }

        const alreadyExistParams = search.split("&").length === 1 && search.includes(params);

        if(alreadyExistParams) {
            navigate(`?${params}=${value}`);

            return `?${params}=${value}`;
        }

        const multipleParams = search.includes("&");

        if(multipleParams){
            const parameters = search.split("&");

            const paramsIndex = parameters.findIndex(el => el.includes(params));

            if(paramsIndex === -1) parameters[parameters.length] = `${params}=${value}`;

            if(paramsIndex !== -1) parameters[paramsIndex] = `${paramsIndex === 0 ? "?" : ""}${params}=${value}`;

            const newParameters = `${parameters.join("&")}`;

            navigate(newParameters);

            return newParameters;
        };

        navigate(`${search}&${params}=${value}`);

        return `${search}&${params}=${value}`;
    };

    const getQuery = () => location.search;

    const existQuery = (params, value) => location.search.includes(`${params}=${value}`);

    const getSpecificQuery = (params) => new URLSearchParams(location.search).get(params);

    const clearQuery = () => navigate("");

    return {
        getQuery,
        setQuery,
        getSpecificQuery,
        clearQuery,
        existQuery,
        navigate,
        location
    }
}

export default useSearchQuery