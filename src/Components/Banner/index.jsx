import { Children } from "react"
import styled from "styled-components"

const BannerEstilizado = styled.div`
    width: 1443px;
    height: 832px;
    margin-top: 38px;
    background-color: #001233;
    img{
        width: 100%;
    }
`

export const Banner = ({children}) => {
    return(
        <BannerEstilizado>
            {children}
        </BannerEstilizado>
    )
}