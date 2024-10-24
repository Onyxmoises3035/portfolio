import Icons from "@/components/Icons";

const skillsPro = [
    { id: 1, image: '/icons/html.svg', text: 'HTML' },
    { id: 2, image: '/icons/css.svg', text: 'CSS' },
    { id: 3, image: '/icons/js.svg', text: 'JavaScript' },
]

const skillsFrame = [
    { id: 1, image: '/icons/next.svg', text: 'NextJs' },
    { id: 2, image: '/icons/react.svg', text: 'React' },
    { id: 3, image: '/icons/tail.svg', text: 'Tailwind' },
]

const skillsLearn = [
    { id: 1, image: '/icons/python.svg', text: 'Python' },
    { id: 2, image: '/icons/flut.svg', text: 'Flutter' },
    { id: 3, image: '/icons/ang.svg', text: 'Angular' },
]

const Skills = ({ lan }) => {
    return (
        <div id="skills" className="section">
            <h1 className="mt-5">{lan.skills.p1}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {skillsPro.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p2}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {skillsFrame.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p3}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {skillsLearn.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;