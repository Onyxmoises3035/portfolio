import Icons from "@/components/Icons";

const Skills = ({ lan }) => {
    return (
        <div id="skills" className="section">
            <h1 className="mt-5">{lan.skills.p1}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {lan.skills.skillsFront.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p2}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {lan.skills.skillsBack.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p3}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {lan.skills.skillsOther.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p4}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {lan.skills.skillsLearn.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;