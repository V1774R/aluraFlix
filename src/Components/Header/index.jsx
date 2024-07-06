import styled from "styled-components";
import { Botao } from "../Botao";
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #262626;
    padding: 0px 52px;
    position: absolute;
    top: 0px;
    z-index: 2;
    img{
        width: 167px;
        height: 40px;
    }
    .botoes{
        width: 385px;
        height: 54px;
        display: flex;
        justify-content: space-between;
    }
    button{
        width: 180px;
        height: 54px;
    }
`
export const Header = () => {
    return(
        <HeaderEstilizado>
            <img src="/imgs/logo.png" alt="Logo da Alura Flix" />
            <div className="botoes">
                <Link to="/"> 
                    <Botao rota="/">HOME</Botao> 
                </Link>
                <Link to="/novoVideo">
                    <Botao rota="/novoVideo">NOVO VÍDEO</Botao>
                </Link>
            </div>
        </HeaderEstilizado>
    )
}