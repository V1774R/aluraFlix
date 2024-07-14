import styled from "styled-components"

const BannerEstilizado = styled.div`
    display: none;
    position: relative;
    top: 0px;
    max-width: 1200px;
    height: 380px;
    background-color: #001233;
    background-image: url("/imgs/player.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center center;
    .conteiner{
        display: flex;
        flex-direction: row;
        width: 90%;
        height: 330px;
        margin: auto;
        margin-top: 360px;
        color: #ffffff;
        display: none;
    }
    .conteudo1, .conteudo2{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: justify;
        padding: 10px;
        
    }
    .conteudo2{
        width: 50%;
        align-items: center;
        justify-content: center;
    }
    .conteudo2 img{
        width: 100%;
        overflow: hidden;
    }
    @media(min-width: 720px){
        display: block;
    }
    @media(min-width: 1100px){
        top: 0px;
        align-items: center;
        .conteiner{
            margin-top: 20px;
            display: flex;
        }

    }
`

export const Banner = ({children}) => {
    return(
        <BannerEstilizado>
            {children}
        </BannerEstilizado>
    )
}