import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const VideosContexto = createContext();

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const categorias = [{nome: "Comédia", cor: "cor1"}, {nome: "Terror", cor: "cor2"}, {nome: "Ação", cor: "cor3"}]

    const listarVideos = async () => {
        try{
            const resposta = await axios.get('https://api-boe.onrender.com/videos');
            if(resposta){
                setVideos(resposta.data)
                console.log('renderizando videos')
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        listarVideos();
    }, [])


    return(
        <VideosContexto.Provider value={{videos, categorias, listarVideos}}>
            {children}
        </VideosContexto.Provider>
    )

}