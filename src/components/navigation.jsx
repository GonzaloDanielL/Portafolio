import { AiFillGithub, AiFillLinkedin } from 'react-icons/AI';
import { motion } from 'framer-motion'

export function Contact() {
    return (
        <div className="navigation-container-right">
            <motion.nav
                initial={{ x: 100, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                className="navigation-nav">
                <ul className="nav-list-container">
                    <motion.li whileHover={{x: -8, scale:1.1}}><a href="https://github.com/GonzaloDanielL" target="_blank"><AiFillGithub /></a></motion.li>
                    <motion.li whileHover={{x: -8, scale:1.1}}><a href="https://www.linkedin.com/in/gonzalo-luna-diaz/" target="_blank"><AiFillLinkedin /></a></motion.li>
                </ul>
            </motion.nav>
        </div>
    )
}

export function Navigation() {
    return (
        <div className="navigation-container">
            <motion.nav 
            initial={{x: -100, scale: 0.5 }}
            animate={{x: 0, scale:1}}
            transition={{duration: 1}}
            className="navigation-nav">

                <ul className="nav-list-container">
                    <motion.li whileHover={{x: 8, scale:1.1}}><a href="#about">Acerca de</a></motion.li>
                    <motion.li whileHover={{x: 8, scale:1.1}}><a href="#projects">Proyectos</a></motion.li>
                    <motion.li whileHover={{x: 8, scale:1.1}}><a href="#skills">Habilidades</a></motion.li>
                </ul>

            </motion.nav>
        </div>
    )
}