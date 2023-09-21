import { useEffect, useState } from 'react'
import { Contact, Navigation, Navigation_arrow } from './components/navigation'
import { Project } from './components/project';
import { Skill } from './components/skill';
import { Certificados } from './components/certificados';
import { Modal } from './components/modal';
import { AiFillHtml5, AiOutlineArrowUp, AiFillGithub, AiFillLinkedin } from 'react-icons/AI';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { SiPhp, SiMysql, SiBootstrap } from 'react-icons/si';
import { motion } from "framer-motion";
import { Fondo } from "./components/fondo";
import { Fade } from "react-awesome-reveal";
import './App.css'

function linksNone() {
  document.getElementById('linkAbout').style.color = "rgb(255, 255, 255)";
  document.getElementById('linkProjects').style.color = "rgb(255, 255, 255)";
  document.getElementById('linkSkills').style.color = "rgb(255, 255, 255)";
  document.getElementById('linkContacto').style.color = "rgb(255, 255, 255)";
}

function linksstyle(et) {
  document.getElementById(et).style.color = "rgb(227, 114, 0)";
}

function App() {
  useEffect(() => {
    linksstyle('linkAbout');
  }, [])

  window.onscroll = () => {
    let div = document.getElementById('about').getBoundingClientRect().bottom;
    let divtop = document.getElementById('about').getBoundingClientRect().top;

    if (document.getElementById('about').getBoundingClientRect().bottom > 400) {
      linksNone();
      linksstyle('linkAbout');

    } else if (document.getElementById('projects').getBoundingClientRect().bottom > 400) {
      linksNone();
      linksstyle('linkProjects');
      /*   document.getElementById('projects').classList.add("elemto-scroll-2"); */

    } else if (document.getElementById('skills').getBoundingClientRect().bottom > 400) {
      linksNone();
      linksstyle('linkSkills');
      /*  document.getElementById('skills').classList.add("elemto-scroll-2"); */

    } else if (document.getElementById('contacto').getBoundingClientRect().bottom > 400) {
      linksNone();
      linksstyle('linkContacto');
      /*     document.getElementById('contacto').classList.add("elemto-scroll-2"); */
    }

    if (div > 500) {
      document.getElementById('navigation-left-arrow').style.left = '-200px';
      document.getElementById('navigation-left-arrow').style.opacity = '0';

    } else {
      document.getElementById('navigation-left-arrow').style.left = '-140px';
      document.getElementById('navigation-left-arrow').style.opacity = '1';
    }

    if (divtop < -80) {
      document.getElementById('navigation-container').style.backgroundColor = '#433d3d98';

    } else {
      document.getElementById('navigation-container').style.backgroundColor = '#433d3d00';

    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className='main-container'>
      <Navigation />
      <Contact />
      <Navigation_arrow />
      <Fondo />
      <Modal />


      <header className='sub-container c-1' id='about'>
        <div className='about-body'>
          <div className='about-body-des'>
            <h1>Gonzalo Luna</h1>
            <p>
              Hola 👋 soy <label>Gonzalo </label>un apasionado desarrollador web junior, siempre dispuesto a seguir aprendiendo y enfrentar nuevos desafíos.<br /><br />
              Egresado y titulado de la carrera técnica de ingeniero de software en el cual aprendí muchas cosas sobre el mundo de la programación y la tecnología, actualmente estoy mejorando de manera autodidacta mis habilidades en el desarrollo web.
              <br /><br />
            </p>
            <div className='about-body-contact'>
              <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/GonzaloDanielL" target="_blank"><AiFillGithub /></motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/gonzalo-luna-diaz/" target="_blank"><AiFillLinkedin /></motion.a>
            </div>
            <a className='boton-cv' href="./GonzaloCV.pdf" target='_blank'>Descargar CV</a>
          </div>
          <div className='about-body-img'>
            <img src="https://cdn.discordapp.com/attachments/894744872161017956/1154088763371311174/portafolio-solopng-removebg-preview.png" alt="" />
          </div>
        </div>
      </header>


      <hr className='separador' />

      <Fade>
        <section className='sub-container c-2 projects' id='projects'>
          <div className='projects-title'>
            <h1>Proyectos</h1>
          </div>
          <div className='projects-container'>
            <Project img="./sistemajgya.png" tipo="bloqueado" github="https://github.com/" title="Sistema JGyA" des="Proyecto freelancer para la administración de productos como el registro, venta y la compra del mismo, la aplicación también muestra gráficos con los datos registrados" tec={["HTML", "CSS", "PHP", "Bootstrap", "JavaScript", "jQuery", "MySQL"]} />

            <Project img="./mealscocktails.png" tipo="enlace" link="https://gonzalodaniell.github.io/MealsAndCocktails/" github="https://github.com/GonzaloDanielL/MealsAndCocktails" title="Meals and cocktails" des="Proyecto personal que lista y muestra recetas y ingredientes de comidas y cócteles" tec={["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind CSS"]} />

            <Project img="./animedetails.png" tipo="enlace" link="https://gonzalodaniell.github.io/Anime-Details/" github="https://github.com/GonzaloDanielL/Anime-Details" title="Anime details" des="Proyecto personal que lista animes y muestra su información como capítulos, genero, plataformas de streaming, etc" tec={["HTML", "CSS", "ReactJS", "JavaScript"]} />

            <Project img="./suscripciones.png" tipo="imagen" github="https://github.com/GonzaloDanielL/Suscripciones" title="Administrar suscripciones" des="Proyecto personal que registra suscripciones y sus proveedores" tec={["HTML", "PHP", "Bootstrap", "JavaScript", "MySQL"]} />

            <Project img="./Boletas.png" tipo="imagen" github="https://github.com/GonzaloDanielL/AdminCompras" title="Boletas o compras" des="Proyecto personal que registra compras, también muestra gráficos con los datos registrados" tec={["HTML", "PHP", "Bootstrap", "JavaScript", "jQuery", "MySQL"]} />

          </div>

        </section>
      </Fade>

      <Fade>
        <section className='sub-container c-3' id='skills'>

          <div className='skill-title'>
            <h1>Habilidades y certificados</h1>
          </div>

          <div className='c-3-sub'>
            <h1>Habilidades</h1>
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
          </div>

          <div className='c-3-sub'>
            <h1>Certificados</h1>
            <div className='certificados-container'>

              <Certificados title="Diseño web responsivo" escuela="FreeCodeCamp" url="https://cdn.discordapp.com/attachments/894744872161017956/1153841650716647444/Captura_de_pantalla_2023-09-19_185421.png" />

              <Certificados title="Titulo técnico Ig. software con I.A" escuela="SENATI" url="https://cdn.discordapp.com/attachments/894744872161017956/1153848537512153148/Captura_de_pantalla_2023-09-19_192139.png" />

              <Certificados title="Desarrollo web I HTML" escuela="Google activate" url="https://cdn.discordapp.com/attachments/894744872161017956/1153848536920756254/Captura_de_pantalla_2023-09-19_192047.png" />

              <Certificados title="Desarrollo web II CSS" escuela="Google activate" url="https://cdn.discordapp.com/attachments/894744872161017956/1153848537193394218/Captura_de_pantalla_2023-09-19_192107.png" />

            </div>
          </div>

        </section>
      </Fade>

      <Fade>
        <section className='sub-container c-4' id="contacto">

          <div className='contacto-title'>
            <h1>Contácteme</h1>
          </div>

          <div className='contacto-body'>
            <form action="https://formsubmit.co/gonzaloluna738@gmail.com" method="post" className='contacto-form'>

              <label htmlFor="name">Nombre: </label>
              <input id="name" name="name" type="text" />

              <label htmlFor="email">Email: </label>
              <input id="email" name="email" type="text" />

              <label htmlFor="description">Descripción: </label>
              <textarea id="description" name="description" type="text"></textarea>

              <input name="Submit" className='contacto-input-submit' type="submit" value="Enviar" />

            </form>
          </div>

        </section>
      </Fade>

      <hr className='separador' />

      <section className='sub-container c-5'>
        <footer className='footer-container'>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#about">{<AiOutlineArrowUp />}Regresar arriba{<AiOutlineArrowUp />}</motion.a>
        </footer>
      </section>


    </motion.div>
  )
}

export default App
