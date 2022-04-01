import React from 'react';
import AcessorioForm from './AcessorioForm';

const IncluirAcessorio = ({ history, acessorios, setAcessorios }) => {
    const handleOnSubmit = (acessorio) => {
        setAcessorios([acessorio, ...acessorios]);
        history.push('/');
    };

    return (
        <React.Fragment>
            <AcessorioForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default IncluirAcessorio;