import "./layout.css"
import { Outlet } from "react-router"
import { useState } from "react"

export function Layout(){
   const [show, setShow] = useState(false)

   return (
      <div>
        <header>
           <h1>CURIOSIDADES DE TECNOLOGIA</h1>
           <p>Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar</p>

           <nav>
               <a href="/">Home</a>
               <a href="/noticias">Notícias</a>
               <a href="/curiosidades">Curiosidades</a>
               <a href="/video">Video</a>
               <a href="/fale-conosco">Fale Conosco</a>
           </nav>

           <button className="menu" onClick={() => setShow(!show)}><img src="src/assets/menu.svg" alt="ícone de menu"/></button>

           {show && <nav className="mobileMenu">
               <a href="/">Home</a>
               <a href="/noticias">Notícias</a>
               <a href="/curiosidades">Curiosidades</a>
               <a href="/video">Video</a>
               <a href="/fale-conosco">Fale Conosco</a>
           </nav>}         
        </header>

        <Outlet />

         <footer>
            <p>Site idealizado pelo <strong>Curso em Vídeo</strong> e desenvolvido pela autora.</p>
         </footer>
    </div>
   )
}