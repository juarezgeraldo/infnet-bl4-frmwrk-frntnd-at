import React from 'react';
import AcessorioForm from './AcessorioForm';
import { useParams } from 'react-router-dom';

const AlterarAcessorio = ({ history, acessorios, setAcessorios }) => {
    const { id } = useParams();
    const acessorioParaEditar = acessorios.find((acessorio) => acessorio.id === id);

    const handleOnSubmit = (acessorio) => {
        const acessoriosFiltrados = acessorios.filter((acessorio) => acessorio.id !== id);
        setAcessorios([acessorio, ...acessoriosFiltrados]);
        history.push('/');
    };

    return (
        <div>
            <AcessorioForm acessorio={acessorioParaEditar} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default AlterarAcessorio;