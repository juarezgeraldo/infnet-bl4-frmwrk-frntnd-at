import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AcessorioForm = (props) => {
    const [acessorio, setAcessorio] = useState({
        id: props.acessorio ? props.acessorio.id : uuidv4(),
        nome: props.acessorio ? props.acessorio.nome : '',
        tipo: props.acessorio ? props.acessorio.tipo : '',
        descricao: props.acessorio ? props.acessorio.descricao : '',
        qtd: props.acessorio ? props.acessorio.qtd : '',
        dataInclusao: props.acessorio ? props.acessorio.dataInclusao : ''
    });

    const [mensagemErro, setMensagemErro] = useState('');

    const { id, nome, tipo, descricao, qtd, dataInclusao } = acessorio;

    function dataFormatada(data){
        const dia  = data.getDate().toString().padStart(2, '0');
        const mes  = (data.getMonth()+1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
        const ano  = data.getFullYear();
    
        return dia+"/"+mes+"/"+ano;
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [nome, tipo, descricao];
        let errorMsg = '';

        const todosOsCamposPreenchidos = values.every((campo) => {
            const valor = `${campo}`.trim();
            return valor !== '' && valor !== '0';
        });

        if (todosOsCamposPreenchidos) {
            const acessorio = {
                id,
                nome,
                tipo,
                descricao,
                qtd,
                dataInclusao: dataFormatada(new Date())
            };
            props.handleOnSubmit(acessorio);

        }
        else {
            errorMsg = 'Preencha todos os campos!';
        }

        setMensagemErro(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setAcessorio((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container class="m-5">
            {props.acessorio && <h2 class="mb-5 mt-5">Alterar acessorio</h2>}
            {!props.acessorio && <h2 class="mb-5 mt-5">Incluir acessorio</h2>}
            {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="nome"
                        value={nome}
                        placeholder="Nome do acessorio"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="tipo">
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Control as="select"
                        className="input-control"
                        name="tipo"
                        value={tipo}
                        onChange={handleInputChange}>
                        <option>Selecione..</option>
                        <option value="Brinco">Brinco</option>
                        <option value="Pulseira">Pulseira</option>
                        <option value="Colar">Colar</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="descricao">
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="descricao"
                        value={descricao}
                        placeholder="Descrição"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="qtd">
                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control
                        className="input-control"
                        as="textarea"
                        rows="3"
                        name="qtd"
                        value={qtd}
                        placeholder="Quantidade"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn pull-right">
                    {props.acessorio ? 'Alterar' : 'Incluir'}
                </Button>
            </Form>
        </Container>
    );
};

export default AcessorioForm;