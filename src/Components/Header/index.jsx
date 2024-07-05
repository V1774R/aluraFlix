import styled from "styled-components";
import { Botao } from "../Botao";

const HeaderEstilizado = styled.header`
    width: 1443px;
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
                <Botao ativo>HOME</Botao>
                <Botao>NOVO VÍDEO</Botao>
            </div>
        </HeaderEstilizado>
    )
}