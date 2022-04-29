import {useState, useEffect} from 'react';

const useCardanoWalletConnector = ({callback, disconnect}) => {

    const [accountChanged, setAccountChanged] = useState(false);
    const [startedConnection, setStartedConnection] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [wallet, setWallet] = useState({
        name: "",
        hexAddress: "",
        network: 1,
    });

    const cardano = window.cardano;

    const connect = async (name) => {

        setLoading(true);

        try{        

            const wallet = await cardano[name].enable();

            const [hexAddress] = await wallet.getUsedAddresses();

            setWallet({ name, hexAddress });

            localStorage.setItem("cryptoWallet", name);

            setStartedConnection(true);

            return {
                connected: true,
                name,
                hexAddress
            }
            
        } catch (err){
            setError(name);
        }

        setLoading(false);
    };

    useEffect(() => {
        if(!cardano) return;
        const wallet = localStorage.getItem("cryptoWallet");
        if(!wallet) return;

        setWallet({name: wallet});

        async function onEvents() {    
            cardano.onAccountChange((address) =>  {
                setWallet((wallet) => ({...wallet, hexAddress: address[0]}));
                setAccountChanged(true);
            });
            cardano.onNetworkChange((network) => {
                setWallet((wallet) => ({...wallet, network}));
                setAccountChanged(true);
            });
        }
        onEvents();

    }, [cardano])

    useEffect(() => {
        if(accountChanged && disconnect !== undefined) disconnect();
    }, [accountChanged, disconnect]);

    useEffect(() => {
        if(startedConnection){
            if(callback !== undefined) callback(wallet);
            setLoading(false);
            setStartedConnection(false);
        }
    }, [startedConnection, callback, wallet]);

    return {
        cardano,
        connect,
        wallet,
        error,
        loading
    };
}

export default useCardanoWalletConnector