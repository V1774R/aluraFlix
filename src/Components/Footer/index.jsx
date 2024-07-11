import styled from "styled-components"
import {useMediaQuery} from '@react-hook/media-query';
import { Link } from "react-router-dom";
import { Botao } from "../Botao";

const FooterEstilizado = styled.footer`
    max-width: 1200px;
    margin: auto;
    height: 125px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: var(--azul-escuro);
`

export const Footer = ({children}) => {
    const menorQue1100px = useMediaQuery('(max-width: 1100px)');
    if(menorQue1100px){
        return(
            <FooterEstilizado>
                <Link to="/"> 
                    <Botao rota="/">HOME</Botao> 
                </Link>
                <Link to="/novoVideo">
                    <Botao rota="/novoVideo">NOVO VÍDEO</Botao>
                </Link>
            </FooterEstilizado>
        )
    }else{
        return(
            <FooterEstilizado>
                {children}
            </FooterEstilizado>
        )
    }
}