import styled from "styled-components"
import { Banner } from "../../Components/Banner"
import { Sessao } from "../../Components/Sessoes"
import { Card } from "../../Components/Cards"
import { useContext } from "react"
import {VideosContexto} from "../../Contextos/Videos/VideosContext"

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
`

export const Home = () => {
    const {videos, categorias} = useContext(VideosContexto)
    console.log(videos)
    return(
        <main>
            <Banner>
                <div className="conteiner">
                    <div className="conteudo1">
                        <button className="btnCategoria">FRONT-END</button>
                        <h1>SEO com React</h1>
                        <p>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="conteudo2">
                        <img src="imgs/player.png"  />
                    </div>
                </div>
            </Banner>
            <SectionMain>

                {
                    categorias.map(categoria => (
                        <Sessao key={categoria}>
                            <button className="btnCategoria">{categoria}</button>
                            <div className="areaCard">
                                {
                                    videos.map(video => {
                                        if(categoria === video.categoria){
                                            return(
                                                <Card 
                                                    key={video.id}
                                                    pid={video.id} 
                                                    ptitulo={video.titulo} 
                                                    pimagem={video.imagem}
                                                    pvideo={video.video}
                                                    pcategoria={categoria}
                                                    pdescricao={video.descricao}

                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </Sessao>                        
                    ))
                }
            </SectionMain>
        </main>
    )
}
