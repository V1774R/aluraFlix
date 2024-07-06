import { createGlobalStyle } from "styled-components";

export const EstilosGlobais = createGlobalStyle`

    *{
        max-width: 100%;
        margin: 0px;
        box-sizing: border-box;
        font-family: "Source Sans 3", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
    :root{
        --azul: #2271D1;
        --azul-escuro: #03122F;
    }
    main{
        width: 100%;
        min-height: 100vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 40px;
    }
    .hide{
        display: none;
    }
    
    .btn{
        background-color: #000000;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-weight: bolder;
        cursor: pointer;
    }
    .botao{
        width: 180px;
        height: 54px;
        margin: 5px;
        background-color: #000000;
        border: 2px solid #ffffff;
        border-radius: 10px;
        color: #ffffff;
        font-weight: bolder;
        cursor: pointer;
        transition: 0.5s;
    }
    .btn-ativo, .botao:hover{
        transition: 0.5s;
        border: 2px solid var(--azul);
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