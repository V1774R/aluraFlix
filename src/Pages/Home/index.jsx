import styled from "styled-components"
import { Banner } from "../../Components/Banner"
import { Sessao } from "../../Components/Sessoes"
import { Card } from "../../Components/Cards"

const SectionMain = styled.div`
    margin-top: -34px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-bottom: 150px;
    .areaCard{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .btnCategoria{
        width: 432px;
        height: 70px;
        background-color: #6BD1FF;
        border-radius: 10px;
        border: none;
        font-weight: bolder;
        font-size: 32px;
        margin-left: 28px;
    }
    
`

export const Home = () => {
    return(
        <main>
            <Banner>
                <img src="/imgs/player.png" alt="imagem de fundo do banner com videos em destaque" />
            </Banner>
            <SectionMain>
                <Sessao>
                    <button className="btnCategoria">FRONT</button>
                    <div className="areaCard">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Sessao>

                <Sessao>
                    <button className="btnCategoria">BACK-END</button>
                    <div className="areaCard">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Sessao>

                <Sessao>
                    <button className="btnCategoria">INOVAÇÃO E GESTÃO</button>
                    <div className="areaCard">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </Sessao>

            </SectionMain>
        </main>
    )
}
