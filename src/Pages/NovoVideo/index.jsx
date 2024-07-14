import styled from "styled-components"
import { useContext, useState } from "react"
import {VideosContexto} from "../../Contextos/Videos/VideosContext"
import axios from "axios"
import {useNavigate} from "react-router-dom";

const FormularioAddVideo = styled.form`
    margin: auto;
    padding-top: 150px;
    width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #ffffff;
    .campo{
            width: 350px;
            height: 10vh;
            border-radius: 10px;
            border: 1px solid #969494;
            background-color: #000000;
            padding: 5px;
            color: #ffffff;
    }
    
    div{
            background-color: none;
    }
    h1{
            padding-block: 10px;
            border-top: 1px solid #969494;
            border-bottom: 1px solid #969494;
    }
    .conteiner{
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: left;
    }
        .area{
            display: flex;
            flex-direction: row;
            justify-content: left;
            background-color: none;
    }
        .texto{
            height: 220px;
    }
        .botao{
            width: 165px;
    }
    @media(min-width: 1100px){
        .conteiner{
            flex-direction: row;         
        }
        div{
            width: 100%;
        }
    }
`

export const NovoVideo = () => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');
    const {categorias} = useContext(VideosContexto);
    const navigate = useNavigate();
    const validacao = (e) => {
        e.preventDefault();
        if(!titulo || !categoria || !imagem || !video || !descricao){
            alert('Erro! Preencha todos os campos para continuar.')
        }else{
            const novoVideo = {
                titulo,
                categoria,
                imagem,
                video,
                descricao
            }
            const cadastrar = async () => {
                try{
                    const resposta = await axios.post('http://localhost:5000/videos', novoVideo);
                    if(resposta){
                        navigate('/sucesso');
                    }
                }catch(error){
                    console.log(error);
                }
            }
            cadastrar();
        }
    }

    return(
        <>
            <FormularioAddVideo onSubmit={(e)=>{validacao(e)}}>
                   <div>
                        <h1>Criar Card</h1>
                   </div>
                   <div className="conteiner">
                        <div className="area">
                            <input 
                                className="campo" 
                                type="text" 
                                placeholder="Insira o título" 
                                required
                                value={titulo}
                                onChange={(e)=>{setTitulo(e.target.value)}}
                                
                            />
                        </div>
                        <div className="area">
                            <select className="campo" onChange={(e)=>{setCategoria(e.target.value)}}>
                                <option defaultValue="">Selecione uma Categoria</option>
                                {
                                    categorias.map(categoria => (
                                        <option key={categoria.nome} value={categoria.nome}>{categoria.nome}</option>
                                    ))
                                }
                            </select>
                        </div>
                   </div>
                   <div className="conteiner">
                        <div className="area">
                            <input 
                                className="campo" 
                                type="text" 
                                placeholder="Url da Imagem"
                                required
                                onChange={(e)=>{setImagem(e.target.value)}}
                                value={imagem}
                            />
                        </div>
                        <div className="area">
                            <input 
                                className="campo" 
                                type="text" 
                                placeholder="Url do Vídeo"
                                required
                                onChange={(e)=>{setVideo(e.target.value)}}
                                value={video}
                            />
                        </div>
                   </div>
                   <div className="areaTextarea">
                        <textarea 
                            className="campo texto" 
                            required
                            onChange={(e)=>{setDescricao(e.target.value)}}
                            value={descricao}
                        ></textarea>
                   </div>
                   <div className="area">
                        <input type="submit" value="GUARDAR" className="botao"/>
                        <input type="reset" value="LIMPAR" className="botao"/>
                   </div>
            </FormularioAddVideo>
        </>
    )
}