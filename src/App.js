import React, { Component } from 'react';
import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container,Typography} from '@material-ui/core';
import 'fontsource-roboto';
import {validarCPF,validarSenha} from "./models/cadastro";
import ValidacoesCadastro from './contexts/ValidacoesCadastro';


class App extends Component {

  render(){
    return (
      <Container component="article" maxWidth="sm" >
         <Typography variant="h3" component="h1"  align="center">Formulário de Cadastro</Typography>
         <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}} /*provedor que fornece as informações/provedor do meu contexto (useContext) ->esta definindo as validações*/ > 
          <FormularioCadastro aoEnviar={aoEnviarForm} />
         </ValidacoesCadastro.Provider>

      </Container>
     
        
     );
  }
  
}

function aoEnviarForm(dados){
  console.log(dados)
}

export default App;
