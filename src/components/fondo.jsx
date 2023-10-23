import { motion } from "framer-motion"

export function Fondo() {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 7 }} className="fondo-container">
            {/*  <div className="fondo-i1"> */}
            <div className="f-item f1">
            </div>

            <div className="f-item f2">
            </div>

            <div className="f-item f4">
            </div>


            <div className="f-item f5">
            </div>

            <div className="f-item f3">
            </div>

            <div className="f-item f6">
            </div>

        </motion.div>
    )
}