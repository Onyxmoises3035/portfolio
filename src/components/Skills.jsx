import Icons from "@/components/Icons";

const skillsFront = [
    { id: 1, image: '/icons/html.svg', text: 'HTML' },
    { id: 2, image: '/icons/css.svg', text: 'CSS' },
    { id: 3, image: '/icons/js.svg', text: 'JavaScript' },
    { id: 4, image: '/icons/next.svg', text: 'NextJs' },
    { id: 5, image: '/icons/react.svg', text: 'React' },
    { id: 6, image: '/icons/tail.svg', text: 'Tailwind' },
]

const skillsBack = [
    { id: 1, image: '/icons/python.svg', text: 'Python' },
    { id: 2, image: '/icons/mysql.svg', text: 'MySQL' },
    { id: 3, image: '/icons/node.svg', text: 'Node' },
]

const skillsOther = [
    { id: 1, image: '/icons/git.svg', text: 'Git' },
]

const skillsLearn = [
    { id: 1, image: '/icons/flut.svg', text: 'Flutter' },
    { id: 2, image: '/icons/ang.svg', text: 'Angular' },
]


const Skills = ({ lan }) => {
    return (
        <div id="skills" className="section">
            <h1 className="mt-5">{lan.skills.p1}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {skillsFront.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p2}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {skillsBack.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p3}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {skillsOther.map(icon => (
                    <div key={icon.id}>
                        <Icons text={icon.text} image={icon.image} />
                    </div>
                ))}
            </div>

            <h1 className="mt-5">{lan.skills.p4}</h1>
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