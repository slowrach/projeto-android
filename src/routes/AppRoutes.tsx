import { Route, Routes } from "react-router"
import { Layout } from "../components/layout/layout"
import { Home } from "../pages/Home"
import { Noticias } from "../pages/Noticias"
import { Curiosidades } from "../pages/Curiosidades"
import { Video } from "../pages/Video"
import { Contato } from "../pages/Contato"

export function AppRoutes(){
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />

            <Route path="/noticias" element={<Noticias />} />

            <Route path="/curiosidades" element={<Curiosidades />} />

            <Route path="/video" element={<Video />} />

            <Route path="/fale-conosco" element={<Contato />} />
         </Route>
      </Routes>
   )
}