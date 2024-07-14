import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { PaginaPadrao } from "./Components/PaginaPadrao"
import { NovoVideo } from "./Pages/NovoVideo"
import { VideosProvider } from "./Contextos/Videos/VideosContext"
import { NaoEcontrada } from "./Pages/NaoEcontrada"
import { Sucesso } from "./Pages/Sucesso"


function App() {
  return (
    <>
      <VideosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Home />}></Route>
              <Route path="/novoVideo" element={<NovoVideo />}></Route>
              <Route path="/notFound" element={<NaoEcontrada />}></Route>
              <Route path="*" element={<Sucesso />}></Route>
            </Route>            
          </Routes>
        </BrowserRouter>
      </VideosProvider>
    </>
  )
}

export default App
