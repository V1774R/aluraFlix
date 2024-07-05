import styled from "styled-components"

const FooterEstilizado = styled.footer`
    width: 1443px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--azul);
`

export const Footer = ({children}) => {
    return(
        <FooterEstilizado>
            {children}
        </FooterEstilizado>
    )
}