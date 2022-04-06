import {useEffect, useState} from 'react';

const useScroll = () => {

    const [axis, setAxis] = useState({
        x: "",
        y: ""
    });

    const onScrollToTop = () => window.scroll({top: 0, behavior: "smooth"})

    useEffect(() => {
        const handleAxis = () => {
            setAxis({
                x : window.scrollX,
                y : window.scrollY
            });
        }

        const scroll = window.addEventListener("scroll", handleAxis);
        return () => window.removeEventListener("scroll", scroll);
    }, [])

    return {
        axis,
        onScrollToTop
    }
}

export default useScroll