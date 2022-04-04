import React from 'react';
import _ from 'lodash';
import { Container, Row } from 'react-bootstrap'
import Acessorio from './Acessorio';

const ListarAcessorio = ({ acessorios, setAcessorios }) => {

    const excluirReg = (id) => {
        setAcessorios(acessorios.filter((acessorio) => acessorio.id !== id));
    };

    return (
        <Container>
            <h2 className="mt-5 text-center">Listagem</h2>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {/* <Acessorio {...acessorios} excluirReg={excluirReg} /> */}
                {!_.isEmpty(acessorios) ? (
                        acessorios.map((acessorio) => (
                                <Acessorio  key={acessorio.id} {...acessorio} excluirReg={excluirReg} />
                        ))
                    ) : (
                        <p className="message">Nenhum acessorio cadastrado. Por favor, insira um novo acessorio</p>
                    )
                }
            </Row>
        </Container>
    );
};

export default ListarAcessorio;