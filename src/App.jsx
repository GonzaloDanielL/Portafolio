import { useEffect, useState } from 'react'
import { Navigation, Navigation_arrow } from './components/navigation'
import { Project } from './components/project';
import { Skill } from './components/skill';
import { Certificados } from './components/certificados';
import { Modal } from './components/modal';

import { AiFillHtml5, AiOutlineArrowUp, AiFillGithub, AiFillLinkedin } from 'react-icons/AI';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoWordpress } from 'react-icons/bi';
import { SiPhp, SiMysql, SiBootstrap } from 'react-icons/si';
import { BsWordpress } from 'react-icons/bs';

import { motion } from "framer-motion";
import { Fondo } from "./components/fondo";
import { Fade } from "react-awesome-reveal";
import './App.css'
import images from './data/images.json';

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
      document.getElementById('navigation-container').style.backgroundColor = '#2f2f2f';

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
      <Navigation_arrow />
      <Fondo />
      <Modal />


      <header className='sub-container c-1' id='about'>
        <div className='about-body'>
          <div className='about-body-des'>
            <h1>Gonzalo Luna</h1>
            <p>
              Hola 👋 soy <label>Gonzalo </label>un apasionado desarrollador web junior, siempre dispuesto a seguir aprendiendo y enfrentar nuevos desafíos. <br /><br />

              Egresado y titulado de la carrera técnica de ingeniero de software en el cual aprendí muchas cosas sobre el mundo de la programación, actualmente estoy mejorando de manera autodidacta mis habilidades en el desarrollo web. <br /><br />

            </p>
            <div className='about-body-contact'>
              <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/GonzaloDanielL" target="_blank"><AiFillGithub /></motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/gonzalo-luna-diaz/" target="_blank"><AiFillLinkedin /></motion.a>
              <a className='boton-cv' href="https://cdn.discordapp.com/attachments/894744872161017956/1165664670649176084/curriculun_vitae.pdf?ex=6547acd2&is=653537d2&hm=66eb43393cc3d8cdacb3cefb445b5b10f624db2b9379f3429c9f88d82a1bd07d&" target='_blank'>Descargar CV</a>
            </div>
          </div>
          <div className='about-body-img'>
            <img src="https://media.discordapp.net/attachments/894744872161017956/1164000006391484516/perfil_marca-2.png?ex=6566887b&is=6554137b&hm=62d2a1f95a57d61e2bba185a65b34ee2b1b44ff6f5a6d630b739984d6518e999&=&width=910&height=889" alt="" />
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
            <Project img="https://media.discordapp.net/attachments/894744872161017956/1167082469137330327/Captura_de_pantalla_2023-10-26_074641.png?ex=654cd53f&is=653a603f&hm=ad2476724d1b0b712818af2e493a755470b897109615cf13f6154b3d9d0e6452&=&width=1200&height=557" link="https://chalox.vercel.app/" title="ChaloX" des="Sitio web de los servicios que ofrezco y muestro los proyectos que e realizado hasta el momento" tec={["HTML", "CSS", "JavaScript", "ReactJS"]} />

            <Project img="https://cdn.discordapp.com/attachments/894744872161017956/1157650084859744286/sistemajgya.png?ex=65196128&is=65180fa8&hm=44d910225297ab7698ea7fa349c250633044cc971ac458e143154d0eeaa78274&" title="Sistema JGyA" des="Proyecto freelancer para la administración de productos como el registro, venta y la compra del mismo, la aplicación también muestra gráficos con los datos registrados" imgs={images.jgya} tec={["HTML", "CSS", "PHP", "Bootstrap", "JavaScript", "jQuery", "MySQL"]} />

            <Project img="https://cdn.discordapp.com/attachments/894744872161017956/1157648938120261694/Captura_de_pantalla_2023-09-30_065805.png?ex=65196016&is=65180e96&hm=32023a44ca8ae2c6d5789678ae32fbc67e2ede881d54a7a995c7b0bea6c1898a&" tipo="enlace" link="https://gonzalodaniell.github.io/MealsAndCocktails/" github="https://github.com/GonzaloDanielL/MealsAndCocktails" title="Meals and cocktails" des="Proyecto personal que lista y muestra recetas e ingredientes de comidas y cócteles" tec={["HTML", "CSS", "ReactJS", "JavaScript", "Tailwind CSS"]} />

            <Project img="https://cdn.discordapp.com/attachments/894744872161017956/1157649891863048292/Captura_de_pantalla_2023-09-12_123103.png?ex=651960fa&is=65180f7a&hm=76a18601fd7550abffcaacb441f76b687a9ec609510bee9071e7ea1cfad56a9e&" tipo="enlace" link="https://gonzalodaniell.github.io/Anime-Details/" github="https://github.com/GonzaloDanielL/Anime-Details" title="Anime details" des="Proyecto personal que muestra información de animes como capítulos, genero, plataformas de streaming y mas" tec={["HTML", "CSS", "ReactJS", "JavaScript"]} />

            <Project img="https://media.discordapp.net/attachments/894744872161017956/1173677001727541378/Captura_de_pantalla_2023-11-13_123046.png?ex=6564d2e3&is=65525de3&hm=f3c53430753fabf4ecff6fb27aaefcb64092eed57b77054b43dbb238b92ddd3b&=&width=1449&height=687" tipo="enlace" link="https://gonzalodaniell.github.io/MocozinSitio.github.io/" title="MocozinPage" des="Pagina web para mostrar algunas características de un videojuego" tec={["HTML", "CSS"]} />

            <Project img="https://cdn.discordapp.com/attachments/894744872161017956/1168990508958367844/wordpress-site.png?ex=6553c640&is=65415140&hm=da46b7297082941202c585cef28846f50d552195cb43119e3122d02b7d582504&" title="Juegos tradicionales" des="Proyecto personal hecho en WordPress sobre juegos tradicionales para niños" link="https://juegostradicionales4.wordpress.com/" tec={["WordPress"]} />

            {/*             <Project img="https://cdn.discordapp.com/attachments/894744872161017956/1157649891582021713/suscripciones.png?ex=651960fa&is=65180f7a&hm=36f2117ead396706f34c54e59b83f1a4bb10f54e66b6b57fba5bb64c0d0edfb4&" tipo="imagen" github="https://github.com/GonzaloDanielL/Suscripciones" title="Administrar suscripciones" des="Proyecto personal que registra suscripciones y sus proveedores" imgs={images.suscripciones} tec={["HTML", "PHP", "Bootstrap", "JavaScript", "MySQL"]} />

            <Project img="https://cdn.discordapp.com/attachments/894744872161017956/1157649891233890314/Boletas.png?ex=651960fa&is=65180f7a&hm=3068f9974a621f835e63a6b005cff63bb2b12e19979a9f73755c74f3779b7e56&" tipo="imagen" github="https://github.com/GonzaloDanielL/AdminCompras" title="Boletas o compras" des="Proyecto personal que registra compras, también muestra gráficos con los datos registrados" imgs={images.compras} tec={["HTML", "PHP", "Bootstrap", "JavaScript", "jQuery", "MySQL"]} /> */}

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

              <Skill img={<BsWordpress />} color="rgb(0, 208, 245)" />

            </div>
          </div>

          <div className='c-3-sub'>
            <h1>Certificados</h1>
            <div className='certificados-container'>

              <Certificados title="Diseño web responsivo" escuela="FreeCodeCamp" url="https://cdn.discordapp.com/attachments/894744872161017956/1153841650716647444/Captura_de_pantalla_2023-09-19_185421.png" img={images.freecode} />

              <Certificados title="Titulo técnico Ig. software con I.A" escuela="SENATI" url="https://cdn.discordapp.com/attachments/894744872161017956/1153848537512153148/Captura_de_pantalla_2023-09-19_192139.png" img={images.senati} />

              <Certificados title="Desarrollo web HTML/CSS" escuela="Google activate" url="https://cdn.discordapp.com/attachments/894744872161017956/1153848536920756254/Captura_de_pantalla_2023-09-19_192047.png" img={images.google} />
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
