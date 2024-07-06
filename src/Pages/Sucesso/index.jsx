import styled from "styled-components"

const H1Estilizado = styled.h1`
    color: #ffffff;
    text-shadow: 1px 1px 50px white;
    text-align: center;
    margin-top: 170px;
`

export const Sucesso = () => {
    return(
        <main>
            <H1Estilizado>Vídeo cadastrado com sucesso!</H1Estilizado>
        </main>
    )
}