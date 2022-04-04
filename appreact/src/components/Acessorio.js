import React from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// function dataAtualFormatada(data){
//     const dia  = data.getDate().toString().padStart(2, '0');
//     const mes  = (data.getMonth()+1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
//     const ano  = data.getFullYear();

//     return dia+"/"+mes+"/"+ano;
// }

const Acessorio = ({
  id,
  nome,
  descricao,
  tipo,
  qtd,
  dataInclusao,
  excluirReg,
  acessorios,
}) => {
  const history = useHistory();
  return (
    <Table className="acessorio mb-3 mt-5">
      <thead>
        <tr class="text-center">
          <th>Id</th>
          <th>Tipo</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Qtd</th>
          <th>Data inclusão</th>
          <th colspan="2">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{tipo}</td>
          <td>{nome}</td>
          <td>{descricao}</td>
          <td>{qtd} </td>
          <td>{dataInclusao}</td>
          {/* <div className="botoes-acessorio mt-3"> */}
          <td>
            <Button
              variant="primary"
              onClick={() => history.push(`/alterarReg/${id}`)}
            >
              Alterar
            </Button>{" "}
          </td>
          <td>
            <Button variant="danger" onClick={() => excluirReg(id)}>
              Excluir
            </Button>
          </td>
          {/* </div> */}
        </tr>
      </tbody>
    </Table>
    // <Card className="acessorio mb-3 mt-5">
    //     <Card.Body>
    //         <Card.Title className="nome-acessorio">{nome}</Card.Title>
    //         <div className="descricao-acessorio">
    //             <div>Id: {id}</div>
    //             <div>Tipo: {tipo}</div>
    //             <div>Descrição: {descricao}</div>
    //             <div>Quantidade: {qtd} </div>
    //             <div>Data inclusão: {dataInclusao}</div>
    //         </div>
    //         <div className="botoes-acessorio mt-3">
    //             <Button variant="primary" onClick={() => history.push(`/alterarReg/${id}`)}>
    //                 Editar
    //             </Button>{' '}
    //             <Button variant="danger" onClick={() => excluirReg(id)}>
    //                 Excluir
    //             </Button>
    //         </div>
    //     </Card.Body>
    // </Card>
  );
};

export default Acessorio;
