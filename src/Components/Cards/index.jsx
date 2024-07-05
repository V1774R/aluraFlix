import styled from "styled-components"
import { Botao } from "../Botao"
import { Banner } from "../Banner"
import { useState } from "react"

const CardEstilizado = styled.div`
    width: 433px;
    margin: 10px;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--azul);
    border-radius: 10px;
    img{
        width: 100%;
        height: 260px;
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
        width: 700px;
        height: auto;
        padding-block: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--azul);
        gap: 50px;
        position: relative;
    }
    form .campo{
        width: 573px;
        height: 62px;
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
        width: 573px;
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

export const Card = () => {
    const [classeModal, setClasseModal] = useState("hide")
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
                
                <form>
                    <img className="iconeX" src="/imgs/x.png" alt="icone de x" onClick={()=>{abrirModal()}}/>
                    <h1>EDITAR CARD:</h1>
                    <input className="campo" type="text" placeholder="Título" />
                    <select className="campo" id="categoria">
                        <option >Selecione</option>
                    </select>
                    <input className="campo" type="text" placeholder="Url da Imagem" />
                    <input className="campo" type="text" placeholder="Url do Vídeo" />
                    <textarea className="campo" placeholder="Descrição"></textarea>
                    <div>
                        <input type="submit" className="botao" value="GUARDAR" />
                        <input type="reset" className="botao" value="LIMPAR" />
                    </div>
                </form>
            </Modal>        
            <CardEstilizado >
                <img src="/imgs/imagemTemp.png" alt="Descricao da img" />
                <div className="controle">
                    <button className="btn">DELETAR</button>
                    <button  className="btn" onClick={()=>{abrirModal()}}>EDITAR</button>
                </div>
            </CardEstilizado>
        </>
    )
}