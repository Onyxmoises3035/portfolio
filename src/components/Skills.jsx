import IconsList from "@/components/IconList";

const Skills = ({ lan }) => {
    return (
        <div id="skills" className="section">
            {lan.skills.map(skill => (
                <IconsList key={skill.id} title={skill.title} icons={skill.icons} />
            ))}
        </div>
    )
}

export default Skills;