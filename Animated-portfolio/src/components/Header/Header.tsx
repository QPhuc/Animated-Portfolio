import { AnimatePresence, motion } from 'framer-motion'
import { BorderBeam } from '../lightswind/border-beam'
import { BookCheckIcon, Menu, Moon, Sun } from 'lucide-react'
import { useState } from 'react';
import { useLenis } from 'lenis/react';

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Career", href: "#career" },
    { name: "Projects", href: "#projects" },
];
const Header = () => {
    const [theme, setTheme] = useState("dark");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lenis = useLenis();

    const handleScrollTo = (id: string) => {
        if (lenis) {
            lenis.scrollTo(id);
        }
        setIsMobileMenuOpen(false); // Close mobile menu on click
    };

    return (
        <AnimatePresence>
            <motion.header
                initial={{ y: -100, top: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
                <div
                    className="border border-gray-100 dark:border-gray-900 backdrop-blur-xl w-full xl:max-w-6xl rounded-full flex items-center justify-between px-6 py-3 transition-all duration-300"
                >
                    <BorderBeam />
                    <a
                        onClick={() => handleScrollTo("#hero")}
                        className="cursor-pointer font-bold text-lg text-gray-800 dark:text-white"
                    >
                        <BookCheckIcon />
                    </a>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-6">
                            {navItems.map((item) => (
                                <motion.li
                                    key={item.name}
                                    className="relative group text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors"
                                >
                                    <a
                                        onClick={() => handleScrollTo(item.href)}
                                        className="cursor-pointer hover:text-pink-800 dark:hover:text-pink-400"
                                    >
                                        {item.name}
                                    </a>
                                    <motion.span
                                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 rounded-full"
                                        initial={{ width: 0, x: "-50%" }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Theme Toggle Button */}
                    <motion.button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full text-sm font-semibold hover:bg-pink-400 dark:hover:bg-pink-800 transition-colors hidden md:block"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {theme === "dark" ? (
                                <motion.div
                                    key="moon"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Moon size={20} className="text-gray-800 dark:text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="sun"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Sun size={20} className="text-gray-800 dark:text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                    {/* Mobile Menu Button - Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden text-gray-800 dark:text-white"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.header>
        </AnimatePresence>
    )
}

export default Header