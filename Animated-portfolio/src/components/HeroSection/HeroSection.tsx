import { motion } from 'framer-motion';
import { Badge } from '../lightswind/badge';

const HeroSection = () => {
    return (
        <motion.div
            id="hero"
            className="text-foreground bg-transparent flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto w-full"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    // acts like staggerChildren / delayChildren
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                },
            }}
        >
            {/* Left Section */}
            <motion.div
                className="flex-1 space-y-4 p-6 text-left md:text-left"
                initial={false} // so it inherits parent animation
            >
                <motion.h1
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.8, ease: "easeOut" },
                    }}
                >Tran Quang Phuc
                    <motion.span
                        className="text-sm text-pink-500 font-semibold block"
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: { duration: 0.8, ease: "easeOut" },
                        }}
                    >He / Him
                    </motion.span>
                </motion.h1>
                <motion.h2
                    className="text-xl text-muted-foreground mt-1"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.8, ease: "easeOut" },
                    }}
                >
                    Web Developer
                </motion.h2>
                <motion.p
                    className="mt-4 text-xs text-muted-foreground"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.8, ease: "easeOut" },
                    }}
                >
                    Crafting elegant web experiences with React, TypeScript, and Tailwind CSS.
                </motion.p>
                <motion.div
                    className="flex flex-wrap justify-center md:justify-start gap-2"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.8, ease: "easeOut" },
                    }}
                >
                    <Badge className="text-xs bg-pink-500">Problem Solving</Badge>
                    <Badge className="text-xs bg-blue-500">Team Player</Badge>
                    <Badge className="text-xs bg-green-500">Quick Learner</Badge>
                    <Badge className="text-xs bg-yellow-500">Creative Thinker</Badge>
                </motion.div>
            </motion.div>

            
        </motion.div >
    )
}

export default HeroSection