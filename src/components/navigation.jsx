import { AiFillGithub, AiFillLinkedin } from 'react-icons/AI';

import { BiSolidRightArrow } from 'react-icons/bi';
import { motion } from 'framer-motion'

function mostrar_nav_arrow() {
    document.getElementById('navigation-left-arrow').style.left = "0px";
}

export function Navigation() {
    return (
        <div className="navigation-container" id="navigation-container">
            <nav className="navigation-nav">
                <h1 className='nav-title'>Gonzalo L.</h1>
                <ul className="nav-list-container">
                    <li><a href="#about" id="linkAbout">Acerca de</a></li>
                    <li><a href="#projects" id="linkProjects">Proyectos</a></li>
                    <li><a href="#skills" id="linkSkills">Habilidades</a></li>
                    <li><a href="#contacto" id="linkContacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export function Navigation_arrow() {
    return (
        <div className="navigation-arrow-container" id="navigation-left-arrow">
            <motion.nav
                initial={{ x: -100, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                className="navigation-nav">

                <ul className="nav-list-container">
                    <motion.li whileHover={{ x: 8, scale: 1.1 }}><a href="#about">Acerca de</a></motion.li>
                    <motion.li whileHover={{ x: 8, scale: 1.1 }}><a href="#projects">Proyectos</a></motion.li>
                    <motion.li whileHover={{ x: 8, scale: 1.1 }}><a href="#skills">Habilidades</a></motion.li>

                    <motion.li
                        whileHover={{ x: 8, scale: 1.1 }}><a href="#contacto">Contacto</a></motion.li>
                </ul>

            </motion.nav>
            <button className='nv-arrow' onClick={() => { mostrar_nav_arrow() }}>
                <BiSolidRightArrow />
            </button>
        </div>
    )
}