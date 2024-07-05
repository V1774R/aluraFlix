import { createGlobalStyle } from "styled-components";

export const EstilosGlobais = createGlobalStyle`

    *{
        margin: 0px;
        box-sizing: border-box;
        font-family: "Source Sans 3", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
    :root{
        --azul: #2271D1;
    }
    body{
        display: flex;
        justify-content: center;
    }
    main{
        width: 1443px;
        min-height: 100vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
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

`