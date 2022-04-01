import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap'
import Acessorio from './Acessorio';

const ListarAcessorio = ({ acessorios, setAcessorios }) => {

    const excluirReg = (id) => {
        setAcessorios(acessorios.filter((acessorio) => acessorio.id !== id));
    };

    return (
        <Container>
            <h2 class="mt-5">Listagem</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {!_.isEmpty(acessorios) ? (
                        acessorios.map((acessorio) => (
                            <Col>
                                <Acessorio  key={acessorio.id} {...acessorio} excluirReg={excluirReg} />
                            </Col>
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