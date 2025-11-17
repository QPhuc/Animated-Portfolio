import { motion } from "framer-motion"

const ProfessionalProfile = () => {
    return (
        <motion.section
            id="skills"
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                },
            }}
            viewport={{ once: true, amount: 0.2 }}
        >

        </motion.section>
    )
}

export default ProfessionalProfile