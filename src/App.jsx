import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { PaginaPadrao } from "./Components/PaginaPadrao"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />}></Route>        
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
