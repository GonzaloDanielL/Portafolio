import { useState } from 'react'
import { Contact, Navigation } from './components/navigation'
import { Project } from './components/project';
import { Skill } from './components/skill';

import { AiFillHtml5, AiOutlineArrowUp, AiFillGithub, AiFillLinkedin } from 'react-icons/AI';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { SiPhp, SiMysql, SiBootstrap } from 'react-icons/si';
import { motion } from "framer-motion";
import { Fondo } from "./components/fondo"

import './App.css'

window.onscroll = () => {
  let div = document.getElementById('about').getBoundingClientRect().bottom;

  if (div > 500) {
    document.getElementById('navigation-left').style.left = '-220px';
    document.getElementById('navigation-left').style.opacity = '0';

  } else {
    document.getElementById('navigation-left').style.left = '-170px';
    document.getElementById('navigation-left').style.opacity = '1';
  }
}


function App() {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='main-container'>
      <Navigation />
      <Contact />
      <Fondo />

      <header className='sub-container c-1' id='about'>
        <div className='about-cabecera'>
          <h1>Gonzalo Luna</h1>
          <div className='about-button'>
            <a href='/src/assets/GonzaloCV.pdf' target='_blank'>Descargar CV</a>
          </div>
        </div>
        <div className='about-body'>
          <div className='about-body-des'>
            <p>Desarrollador web front end junior siempre dispuesto a
              seguir aprendiendo y mejorar mis habilidades en la programación, preparado
              para utilizar mis conocimientos y pasión para impulsar la
              misión de una empresa o compañía</p>
            <div className='about-body-contact'>
              <a href="https://github.com/GonzaloDanielL" target="_blank"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/gonzalo-luna-diaz/" target="_blank"><AiFillLinkedin /></a>
            </div>
          </div>
          <div className='about-body-img'>
            <img src="/src/assets/foto.png" alt="" />
          </div>
        </div>
      </header>

      <hr className='separador' />

      <section className='sub-container c-2' id='projects'>
        <div className='projects-title'>
          <h1>Proyectos</h1>
        </div>

        <div className='projects-container'>
          <Project img="/src/assets/projects/sistemajgya.png" tipo="bloqueado" github="https://github.com/" title="Sistema JGyA" des="Proyecto para la administración de productos como el registro, venta y la compra del mismo, la aplicación también muestra gráficos con los datos registrados" tec={["HTML", "CSS", "PHP", "Bootstrap", "JavaScript", "jQuery", "MySQL"]} />

          <Project img="/src/assets/projects/mealscocktails.png" tipo="enlace" link="https://gonzalodaniell.github.io/MealsAndCocktails/" github="https://github.com/GonzaloDanielL/MealsAndCocktails" title="Meals and cocktails" des="Proyecto personal que lista y muestra recetas y ingredientes de comidas y cócteles" tec={["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind CSS"]} />

          <Project img="/src/assets/projects/animedetails.png" tipo="enlace" link="https://gonzalodaniell.github.io/Anime-Details/" github="https://github.com/GonzaloDanielL/Anime-Details" title="Anime details" des="Proyecto personal que lista animes y muestra su información como capítulos, genero, plataformas de streaming, etc" tec={["HTML", "CSS", "ReactJS", "JavaScript"]} />

          <Project img="/src/assets/projects/conteo.png" tipo="enlace" link="https://gonzalodaniell.github.io/Conteo-Dinero/" github="https://github.com/GonzaloDanielL/Conteo-Dinero" title="Suma y conteo (S/.)" des="Proyecto personal para sumar dinero" tec={["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind CSS"]} />


          <Project img="/src/assets/projects/suscripciones.png" tipo="imagen" github="https://github.com/GonzaloDanielL/Suscripciones" title="Administrar suscripciones" des="Proyecto personal que registra suscripciones y sus proveedores" tec={["HTML", "PHP", "Bootstrap", "JavaScript", "MySQL"]} />

          <Project img="/src/assets/projects/Boletas.png" tipo="imagen" github="https://github.com/GonzaloDanielL/AdminCompras" title="Boletas o compras" des="Proyecto personal que registra compras, también muestra gráficos con los datos registrados" tec={["HTML", "PHP", "Bootstrap", "JavaScript", "jQuery", "MySQL"]} />

        </div>

      </section>

      <section className='sub-container c-3' id='skills'>

        <div className='skill-title'>
          <h1>Habilidades</h1>
        </div>
        <div className='skill-container'>

          <Skill img={<IoLogoCss3 />} color="blue" />

          <Skill img={<AiFillHtml5 />} color="rgb(255, 106, 0)" />

          <Skill img={<BiLogoJavascript />} color="rgb(255, 204, 0)" />

          <Skill img={<BiLogoReact />} color="rgb(0, 213, 255)" />

          <Skill img={<BiLogoTailwindCss />} color="rgb(0, 229, 255)" />

          <Skill img={<SiPhp />} color="rgb(0, 128, 255)" />

          <Skill img={<SiMysql />} color="rgb(0, 108, 202)" />

          <Skill img={<SiBootstrap />} color="rgb(109, 0, 243)" />

        </div>

      </section>

      <hr className='separador' />

      <section className='sub-container c-4'>
        <footer className='footer-container'>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#about">{<AiOutlineArrowUp />}Regresar arriba{<AiOutlineArrowUp />}</motion.a>
        </footer>
      </section>

    </motion.div>
  )
}

export default App
