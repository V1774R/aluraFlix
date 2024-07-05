import styled from "styled-components";

const SectionEstilizada = styled.section`
    width: 1356px;
    height: 435px;
    background-color: none;
    display: flex;
    
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Sessao = ({children}) => {
    return(
        <SectionEstilizada>
            {children}
        </SectionEstilizada>
    )
}