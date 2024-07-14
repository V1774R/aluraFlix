import { createGlobalStyle } from "styled-components";

export const EstilosGlobais = createGlobalStyle`
    *{
        max-width: 100%;
        margin: 0px;
        box-sizing: border-box;
        font-family: "Source Sans 3", sans-serif;
        font-style: normal;
    }
    :root{
        --azul: #2271D1;
        --azul-escuro: #03122F;
    }
    body{
        background-color: #000000;
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
        width: 350px;
        height: 70px;
        background-color: #6BD1FF;
        border-radius: 10px;
        border: none;
        font-weight: bolder;
        font-size: 32px;
    }
    .botoes{
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: space-between;
    }
    button{
        width: 180px;
        height: 54px;
    }
    /* Estilo para navegadores WebKit (Chrome, Safari, Opera) */
    ::-webkit-scrollbar {
    width: 12px; /* largura da barra de rolagem */
    }

    ::-webkit-scrollbar-track {
    background-color: var(--azul); /* cor do fundo da trilha */
    }

    ::-webkit-scrollbar-thumb {
    background-color: #66c0fc; /* cor do botão da barra de rolagem */
    border-radius: 6px; /* borda arredondada */
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #33335c;
    }

    .cor1{
        background-color: #009178;
    }
    .cor2{
        background-color: #a87d05;
    }
    .cor3{
        background-color: #7971e7;
    }

    @media(min-width: 1100px){
        main{
            width: 1200px;
            margin: auto;
        }
        .botoes{
            width: 435px;
        }
    }
`