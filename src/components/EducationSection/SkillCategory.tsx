import { AnimatePresence, motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../lightswind/card"
import { CountUp } from "../lightswind/count-up"
import { Progress } from "../lightswind/progress"
import { Badge } from "../lightswind/badge"

const technicalSkills = [
    { name: "React.js / Next.js", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "TypeScript & JavaScript", level: 92 },
    { name: "Database (MongoDB / PostgreSQL)", level: 88 },
    { name: "Cloud (AWS / Azure)", level: 85 },
]

const sortSkills = [
    "Leadership",
    "Problem Solving",
    "Agile Methodologies",
    "Mentorship",
    "Strategic Thinking",
    "Cross-Team Collaboration",
]

const ProfessionalProfile = () => {
    const renderTechnicalSkills = () => {
        return technicalSkills.map((skill, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <div className="flex items-center justify-between text-sm font-medium mb-1">
                    <span>{skill.name}</span>
                    <CountUp
                        className="text-md "
                        value={skill.level}
                        suffix="%"
                        duration={1.5}
                        decimals={0}
                        animationStyle="spring"
                        colorScheme="primary"
                    />
                </div>
                <Progress value={skill.level} />
            </motion.div>
        ))
    }

    const renderSortSkills = () => {
        return sortSkills.map((skill, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                viewport={{ once: true }}
            >
                <Badge className="bg-pink-500">{skill}</Badge>
            </motion.div>
        ))
    }

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
            <h3 className="text-3xl font-bold mb-6">Core Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {renderTechnicalSkills()}
                    </CardContent>

                    <Card>
                        <CardHeader>
                            <CardTitle>Soft Skills</CardTitle>
                            <CardContent className="flex flex-wrap gap-2">
                                <AnimatePresence>
                                    {renderSortSkills()}
                                </AnimatePresence>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </Card>
            </div>
        </motion.section>
    )
}

export default ProfessionalProfile