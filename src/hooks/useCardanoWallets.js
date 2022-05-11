import {useState, useEffect, useCallback} from 'react';

const useCardanoWallets = () => {
    const cardano = window.cardano;

    const [cryptoWalletData, setCryptoWalletData] = useState({
        wallet: "",
        hexAddress: "",
        network: 1,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [accountChanged, setAccountChanged] = useState(false);
    const [networkChanged, setNetworkChanged] = useState(false);

    const onConnect = useCallback(async(wallet, callback) => {
        if(loading) return;

        setLoading(true);

        try{
            const walletConnected = await cardano[wallet.toLowerCase()].enable();
            const [hexAddress] = await walletConnected.getUsedAddresses();
            setCryptoWalletData({...cryptoWalletData, hexAddress, wallet});
            localStorage.setItem("cryptoWallet", wallet);
            if(callback) callback({hexAddress});
        } catch(err){
            if(err.code) setError("Access denied");
            if(!err.code) setError(wallet);
        }

        setLoading(false);
    }, [cryptoWalletData, cardano, loading]);

    useEffect(() => {
        const cryptoWallet = localStorage.getItem("cryptoWallet");
        if(!cryptoWallet && !cardano) return;
        if(!cryptoWalletData.hexAddress) onConnect(cryptoWallet);
    }, [onConnect, cardano, cryptoWalletData.hexAddress]);

    useEffect(() => {
        const cryptoWallet = localStorage.getItem("cryptoWallet");
        if(!cryptoWallet && !cardano) return;
        cardano.onAccountChange((hexAddress) => {
            setCryptoWalletData(cryptoWalletData => ({...cryptoWalletData, wallet: "", hexAddress: hexAddress[0]}));
            setAccountChanged(true);
        });
        cardano.onNetworkChange((network) => {
            setCryptoWalletData(cryptoWalletData =>  ({...cryptoWalletData, network}));
            setNetworkChanged(true);
        });
    }, [cardano]);

    //clean up;
    useEffect(() => {
        return () => {
            setLoading(false);
        }
    }, [])

    return {
        cardano,
        onConnect,
        cryptoWalletData,
        setCryptoWalletData,
        loading,
        error,
        accountChanged,
        networkChanged,
    };
}

export default useCardanoWallets