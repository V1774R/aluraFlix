import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CardEstilizado = styled.div`
    min-width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid #fff;
    border-radius: 10px;
    margin: 20px 30px 20px auto;
    img{
        width: 350px;
        height: 260px;
        border-radius: 10px 10px 0px 0px;
    }
    .controle{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .controle button{
        width: 50%;
        border-radius: 0px 0px 10px 10px;

    }
    .btn{
        background-color: #000000;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-weight: bolder;
        cursor: pointer;
    }
`
const Modal = styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(3, 18, 47, 0.9);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        width: 90%;
        height: 95vh;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--azul);
        gap: 20px;
        position: relative;
    }
    form .campo{
        width: 100%;
        min-height: 30px;
        height: 10vh;
        border-radius: 8px;
        border: none;
        padding: 5px;
    }
    h1{
        color: var(--azul);
        font-size: 2.5rem;
    }
    .botao{
        width: 180px;
        height: 54px;
        background-color: #000000;
        border: #ffffff;
        border-radius: 10px;
        color: #ffffff;
        font-weight: bolder;
        cursor: pointer;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .iconeX{
        position: absolute;
        top: 10px;
        left: calc(100% - 62px);
        cursor: pointer;
    }
`

export const Card = ({pid, ptitulo, pimagem, pvideo, pcategoria, pdescricao}) => {
    const [id, setId] = useState(pid);
    const [classeModal, setClasseModal] = useState("hide");
    const [titulo, setTitulo] = useState(ptitulo);
    const [imagem, setImagem] = useState(pimagem);
    const [video, setVideo] = useState(pvideo);
    const [categoria, setCategoria] = useState(pcategoria.nome);
    const [descricao, setDescricao] = useState(pdescricao);
    const navigate = useNavigate();
    
    
    const limpar = () => {
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setDescricao('')
    }


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
            const atualizar = async (id) => {
                try{
                    const resposta = await axios.put(`https://api-boe.onrender.com/videos/${id}`, novoVideo);
                    if(resposta){
                        setClasseModal('hide');
                        navigate('/');
                    }
                }catch(error){
                    alert(error.message)
                    console.log(error);
                }
            }
            atualizar(id);
        }
    }    
    const deletar = async(id) =>{
        try{
            const resposta = await axios.delete(`https://api-boe.onrender.com/videos/${id}`);
            if(resposta){
                navigate('/sucesso');
            }
        }catch(error){
            alert(error.message)
            console.log(error)
        }
    }
    
    const abrirModal = () => {
        console.log()
        if(classeModal === "hide"){
            setClasseModal("")
            console.log('abriu')
        }else{
            setClasseModal("hide")
            console.log('fechou')
        }
    }

    return(
        <>
            <Modal className={classeModal} >
                <form onSubmit={(e)=>{validacao(e)}}>
                    <img className="iconeX" src="/imgs/x.png" alt="icone de x" onClick={()=>{abrirModal()}}/>
                    <h1>EDITAR CARD:</h1>
                    <input className="campo" type="text" placeholder="Título" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
                    <input type="text"className="campo" readOnly value={categoria} />
                    <input className="campo" type="text" placeholder="Url da Imagem" value={imagem} onChange={(e)=>setImagem(e.target.value)}/>
                    <input className="campo" type="text" placeholder="Url do Vídeo" value={video} onChange={(e)=>setVideo(e.target.value)}/>
                    <textarea className="campo" placeholder="Descrição"value={descricao} onChange={(e)=>setDescricao(e.target.value)}></textarea>
                    <div>
                        <input type="submit" className="botao" value="GUARDAR" />
                        <input type="reset" className="botao" value="LIMPAR" onClick={()=>{limpar()}}/>
                    </div>
                </form>
            </Modal>        
            <CardEstilizado>
                <img src={imagem} alt={`imagem do filme ${titulo}`} />
                <div className="controle">
                    <button className="btn" onClick={()=>{deletar(pid)}}>DELETAR</button>
                    <button  className="btn" onClick={()=>{abrirModal()}}>EDITAR</button>
                </div>
            </CardEstilizado>
        </>
    )
}