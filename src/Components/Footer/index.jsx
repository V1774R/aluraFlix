import styled from "styled-components"

const FooterEstilizado = styled.footer`
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--azul-escuro);
`

export const Footer = ({children}) => {
    return(
        <FooterEstilizado>
            {children}
        </FooterEstilizado>
    )
}