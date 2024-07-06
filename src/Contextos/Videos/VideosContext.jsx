import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const VideosContexto = createContext();

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    //const categorias = ["Frontend", "Backend", "Inovação e Gestão"];
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
        const listarVideos = async () => {
            try{
                const resposta = await axios.get('http://localhost:5000/videos');
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