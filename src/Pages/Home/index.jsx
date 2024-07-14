import styled from "styled-components"
import { Banner } from "../../Components/Banner"
import { Sessao } from "../../Components/Sessoes"
import { Card } from "../../Components/Cards"
import { useContext, useEffect } from "react"
import {VideosContexto} from "../../Contextos/Videos/VideosContext"

const SectionMain = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-bottom: 150px;
    .areaBtnCategoria{
        width: 100%;
        display: flex;
    }
    .areaCard{
        height: 370px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: none;
        overflow: auto;
    
}
@media(min-width: 1100px){
    .areaCard{
        margin-top: 80px;
    }
}
`

export const Home = () => {
    const {videos, categorias, listarVideos} = useContext(VideosContexto)
    // console.log(videos)
    useEffect(()=>{listarVideos()}, [])
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
                        <Sessao key={categoria.nome}>
                            <div className="areaBtnCategoria">
                                <button className={`btnCategoria ${categoria.cor}`}>{categoria.nome}</button>
                            </div>
                            <div className="areaCard">
                                {
                                    videos.map(video => {
                                        if(categoria.nome === video.categoria){
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
