import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const Title = () => {
    const location = useLocation()

    useEffect(() => {
        const title = location.pathname.slice(1).replace(/\//g, "-").split("-").splice(0, 2);
        const capitalise = (array) => array.map(word => word.substring(0, 1).toUpperCase() + word.substring(1)).join(" ").replace(/-/g, "");
        document.title = `Meusic ${title[0].length >= 2 ? `| ${capitalise(title)}` : ""}`;
    }, [location])

    return null
}

export default Title;