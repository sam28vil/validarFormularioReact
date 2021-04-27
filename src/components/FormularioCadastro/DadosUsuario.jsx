import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}){
   const [email,setEmail]= useState("");
   const [senha,setSenha]= useState("");
   const validacoes=useContext(ValidacoesCadastro);
   const [erros,validarCampos,possoEnviar] = useErros(validacoes); //os dados usuarioo tem validaçoes diferentes dos dados de entrega e dos dados pessoais

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email,senha});
            }
        }}>
            <TextField 
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
            id="email" 
            name="email"
            label="Email" 
            type="email" 
            required
            variant="outlined" 
            fullWidth 
            margin="normal" />
            <TextField 
            value={senha}
            onChange={(event)=>{setSenha(event.target.value)}}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha" 
            name="senha"
            label="Senha" 
            type="password" 
            required
            variant="outlined" 
            fullWidth 
            margin="normal"/>
            <Button 
            type="submit"
            variant="contained" 
            color="primary" >Próximo</Button>
        </form>
    )
}

export default DadosUsuario;