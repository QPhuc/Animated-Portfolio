import { motion } from "framer-motion"

const ProjectsSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
        >
            <section className="max-w-7xl mx-auto px-6 py-12">
                <motion.h2
                    className="text-3xl font-bold text-foreground mb-8 text-center"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Projects
                </motion.h2>
            </section>
        </motion.div>
    )
}

export default ProjectsSection