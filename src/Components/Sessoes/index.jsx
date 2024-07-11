import styled from "styled-components";

const SectionEstilizada = styled.section`
    background-color: none;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const Sessao = ({children}) => {
    return(
        <SectionEstilizada>
            {children}
        </SectionEstilizada>
    )
}