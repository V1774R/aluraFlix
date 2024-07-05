import styled from "styled-components"

const ButtonEstilizado = styled.button`
    background-color: #000000;
    border: ${props => props.ativo ? "2px solid var(--azul)" : "2px solid #ffffff"};
    border-radius: 10px;
    color: #ffffff;
    font-weight: bolder;
    cursor: pointer;
`

export const Botao = ({ativo, children}) => {
    return(
        <ButtonEstilizado $ativo={ativo}>
           {children}
        </ButtonEstilizado>
    )
}