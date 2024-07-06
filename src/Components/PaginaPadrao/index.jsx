import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { EstilosGlobais } from "../GlobalStyles"
import { Footer } from "../Footer"

export const PaginaPadrao = () => {
    return(
        <>  
            <EstilosGlobais />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer>
                <img src="imgs/logo.png" alt="logo da alura flix" />
            </Footer>
        </>
    )
}