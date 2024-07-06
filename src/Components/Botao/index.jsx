import styled from "styled-components"
import {useLocation} from "react-router-dom";

const ButtonEstilizado = styled.button`
    background-color: #000000;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bolder;
    cursor: pointer;
`

export const Botao = ({rota, children}) => {
    const location = useLocation();
    const rotaAtual = location.pathname;
    const ativar = rotaAtual === rota ? 'btn-ativo' : '';
    return(
        <ButtonEstilizado className={ativar}>
           {children}
        </ButtonEstilizado>
    )
}