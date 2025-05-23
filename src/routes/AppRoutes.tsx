import { Route, Routes, BrowserRouter } from "react-router"
import { Layout } from "../components/layout/layout"
import { Home } from "../pages/Home/home"
import { Noticias } from "../pages/Noticias/noticias"
import { Curiosidades } from "../pages/Curiosidades/curiosidades"
import { Video } from "../pages/Video/video"
import { Contato } from "../pages/Contato/contato"

export function AppRoutes(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" index element={<Home />} />

               <Route path="/noticias" element={<Noticias />} />

               <Route path="/curiosidades" element={<Curiosidades />} />

               <Route path="/video" element={<Video />} />

               <Route path="/fale-conosco" element={<Contato />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}