import { useState, useEffect } from 'react';

const useLocalStorage = (chave, valorInicial) => {
    const [valor, setValor] = useState(() => {
        try {
            const localValue = window.localStorage.getItem(chave);
            return localValue ? JSON.parse(localValue) : valorInicial;
        } catch (error) {
            return valorInicial;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(chave, JSON.stringify(valor));
    }, [chave, valor]);

    return [valor, setValor];
};

export default useLocalStorage;