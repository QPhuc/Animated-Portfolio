import { AnimatePresence, motion } from 'framer-motion'
import { BorderBeam } from '../lightswind/border-beam'
import { BookCheckIcon } from 'lucide-react'

const Header = () => {

    const handleScrollTo = (id: string) => { 
        const element = document.querySelector(id)
    }

    return (
        <AnimatePresence>
            <motion.header
                initial={{ y: -100, top: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
                <div
                    className="border border-gray-100 dark:border-gray-900 backdrop-blur-xl
            w-full xl:max-w-6xl rounded-full
            flex items-center justify-between px-6 py-3
            transition-all duration-300"
                >
                    <BorderBeam />
                    <a
                        onClick={() => handleScrollTo("#hero")}
                        className="cursor-pointer font-bold text-lg text-gray-800 dark:text-white"
                    >
                        <BookCheckIcon />
                    </a>
                </div>
            </motion.header>
        </AnimatePresence>
    )
}

export default Header