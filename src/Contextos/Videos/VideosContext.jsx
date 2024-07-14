import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const VideosContexto = createContext();

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    //const categorias = ["Comédia", "Terror", "Ação"];
    const categorias = [{nome: "Comédia", cor: "cor1"}, {nome: "Terror", cor: "cor2"}, {nome: "Ação", cor: "cor3"}]
    //const [categorias, setCategorias] = useState(["Frontend", "Backend", "Inovação e Gestão"]);

    useEffect(()=>{
        const listarVideos = async () => {
            try{
                const resposta = await axios.get('https://api-6fzr.onrender.com/videos');
                if(resposta){
                    setVideos(resposta.data)
                    const todosOsVideos = resposta.data;
                    const categoriasFiltradas = new Set(todosOsVideos.map(video => video.categoria));
                    setCategorias(Array.from(categoriasFiltradas));
                }
            }catch(error){
                console.log(error)
            }
        }
        listarVideos();
    }, [])

    return(
        <VideosContexto.Provider value={{videos, categorias}}>
            {children}
        </VideosContexto.Provider>
    )

}