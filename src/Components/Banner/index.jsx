import styled from "styled-components"

const BannerEstilizado = styled.div`
    width: 100%;
    height: 832px;
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

`

export const Banner = ({children}) => {
    return(
        <BannerEstilizado>
            {children}
        </BannerEstilizado>
    )
}