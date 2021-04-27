import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar}){ //recebendo propriedades
    const [etapaAtual,setEtapaAtual]=useState(0);
    const [dadosColetado,setDados]=useState({}); //obj vazio 
    
    useEffect(()=>{
        if(etapaAtual===formularios.length-1){ //pois ele irá enviar as etapas já na pag de obrigado
            console.log(dadosColetado)
        }
    })

    const formularios=[
    <DadosUsuario aoEnviar={coletarDados}  />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" >Obrigado pelo cadastro!</Typography>
    ];
    function coletarDados(dados){
        setDados({...dadosColetado,...dados}); //dados coletados e os dados que irá receber
        proximo();
    }
    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }
    return( //stepper->conta os passos das etapas
        <>
        <Stepper activeStep={etapaAtual}> 
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]};
        </>
    )
}

export default FormularioCadastro;