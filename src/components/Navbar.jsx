import PropTypes from 'prop-types';
import { Moon, SunDim } from "@phosphor-icons/react"
import { motion } from "framer-motion"
export default function Navbar({ setDarkMode, darkMode }) {

    return (
        <div className={`w-full flex justify-between pr-10 py-2 ${darkMode ? " bg-foreground text-copy" : "text-copyLight bg-foreground/10"} transition-colors duration-300`}>
            <h1 className={`ml-6 font-bold `}>TWUBRIC</h1>
            <button onClick={() => setDarkMode((prv) => !prv)}
                className={`w-12 p-1  flex ${darkMode ? " text-copyLight bg-foregroundLight/10 justify-end" : " text-copyLight bg-foreground/10  justify-start"} rounded-2xl transition-colors`} >
                <motion.div layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }} className={`w-5 h-5 grid place-content-center ${darkMode ? "bg-foregroundLight" : "bg-foreground text-copy"} rounded-full`} >{darkMode ? <Moon size={"100%"} weight="duotone" /> : <SunDim size={"100%"} weight="duotone" />}</motion.div>
            </button>
        </div>
    )
}
Navbar.propTypes = {
    setDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
};