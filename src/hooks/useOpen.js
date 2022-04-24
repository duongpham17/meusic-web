import {useState} from 'react';

const useOpen = () => {

    const [open, setOpen] = useState(false);
    const [openValue, setOpenValue] = useState("");

    const onOpen = () => setOpen(!open);

    const onOpenValue = (value) => {
        if(value === openValue) return setOpenValue("");
        setOpenValue(value);
    }

    return {
        onOpen,
        open,
        openValue,
        onOpenValue,
        setOpenValue
    }
};

export default useOpen;
