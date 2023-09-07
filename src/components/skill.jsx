import { motion } from "framer-motion"

export function Skill(props) {
    return (
        <motion.div 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='skill-card' style={{color: props.color}}>
            {props.img}
        </motion.div>
    )
}