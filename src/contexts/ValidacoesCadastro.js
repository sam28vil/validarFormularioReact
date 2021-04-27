import React from 'react';

const ValidacoesCadastro= React.createContext({ //por padrão n possui nenhuma validação
    cpf:semValidacao, 
    senha:semValidacao, 
    nome:semValidacao
});

function semValidacao(dados){
    console.log(dados);
    return{valido:true,texto:""}
}
export default ValidacoesCadastro;