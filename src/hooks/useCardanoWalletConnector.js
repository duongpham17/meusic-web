import {useState, useEffect} from 'react';

const useCardanoWalletConnector = ({callbackWalletChange}) => {

    const [changed, setChanged] = useState(false);
    const [error, setError] = useState("");

    const [wallet, setWallet] = useState({
        name: "",
        hexAddress: "",
        network: 1,
    });

    const cardano = window.cardano;

    const connect = async (name) => {

        try{        
            const wallet = await cardano[name].enable();

            const [hexAddress] = await wallet.getUsedAddresses();

            setWallet({ name, hexAddress });

            setChanged(true);

            localStorage.setItem("cryptoWallet", name);

            return {
                connected: true,
                name,
                hexAddress
            }
            
        } catch (err){
            setError(name);
        }
    };

    useEffect(() => {
        if(!cardano) return;
        const wallet = localStorage.getItem("cryptoWallet");
        if(!wallet) return;

        setWallet({name: wallet});

        async function onEvents() {    
            cardano.onAccountChange((address) =>  {
                setWallet((wallet) => ({...wallet, hexAddress: address[0]}));
                setChanged(true);
            });
            cardano.onNetworkChange((network) => {
                setWallet((wallet) => ({...wallet, network}));
                setChanged(true);
            });
        }
        onEvents();

    }, [cardano, callbackWalletChange])

    useEffect(() => {
        if(changed) {
            callbackWalletChange(wallet);
            setChanged(false);
        }   
    }, [callbackWalletChange, changed, wallet]);

    return {
        cardano,
        connect,
        wallet,
        error
    };
}

export default useCardanoWalletConnector