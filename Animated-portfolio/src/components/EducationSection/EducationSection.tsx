import { motion } from "framer-motion"

const EducationSection = () => {
    return (
        <motion.section
            id="education"
            className="space-y-10 py-10 px-6"
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >

        </motion.section>
    )
}

export default EducationSection