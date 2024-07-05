import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { EstilosGlobais } from "../GlobalStyles"
import { Banner } from "../Banner"
import { Footer } from "../Footer"

export const PaginaPadrao = () => {
    return(
        <main>  
            <EstilosGlobais />
            <Header />
            <Outlet />
            <Footer>
                <img src="imgs/logo.png" alt="logo da alura flix" />
            </Footer>
        </main>
    )
}