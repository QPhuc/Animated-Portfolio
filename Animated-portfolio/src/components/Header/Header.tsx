import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
    return (
        <AnimatePresence>
            <motion.header>
                <div
                    className="border border-gray-100 dark:border-gray-900 backdrop-blur-xl
            w-full xl:max-w-6xl rounded-full
            flex items-center justify-between px-6 py-3
            transition-all duration-300"
                >
                    <h1 className="text-2xl font-bold">Animated Portfolio</h1>
                </div>
            </motion.header>
        </AnimatePresence>
    )
}

export default Header