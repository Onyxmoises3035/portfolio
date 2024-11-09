import CardP from "./CardP";

const Projects = ({ lan }) => {

    const projects = [
        {
            id: 1,
            name: 'Pokedex',
            image: '/images/preview/poke/logo.webp',
            tecs: [
                { id: 1, image: '/icons/next.svg', text: 'NextJs' },
                { id: 2, image: '/icons/tail.svg', text: 'Tailwind' },
                { id: 3, image: '/icons/react.svg', text: 'React' },
            ],
            links:
                [
                    { id: 1, target: '_blank', image: '/icons/link.svg', link: 'https://poke-nine-chi.vercel.app', },
                    { id: 2, target: '_blank', image: '/icons/github.svg', link: 'https://github.com/Onyxmoises3035/Poke.git', },
                ],
        },
        {
            id: 2,
            name: 'Gabow',
            image: '/images/preview/gabow/logo.png',
            tecs: [
                { id: 1, image: '/icons/next.svg', text: 'NextJs' },
                { id: 2, image: '/icons/tail.svg', text: 'Tailwind' },
                { id: 3, image: '/icons/react.svg', text: 'React' },
            ],
            links:
                [
                    { id: 1, target: '_blank', image: '/icons/link.svg', link: 'https://poke-nine-chi.vercel.app', },
                    { id: 2, target: '_blank', image: '/icons/github.svg', link: 'https://github.com/Onyxmoises3035/Poke.git', },
                ],
        },
        {
            id: 3,
            name: 'PetAlert',
            image: '/images/preview/pet/logo.png',
            tecs: [
                { id: 1, image: '/icons/next.svg', text: 'NextJs' },
                { id: 2, image: '/icons/tail.svg', text: 'Tailwind' },
                { id: 3, image: '/icons/react.svg', text: 'React' },
                { id: 4, image: '/icons/python.svg', text: 'Python' },
            ],
            links:
                [
                    { id: 1, target: '_blank', image: '/icons/link.svg', link: 'https://poke-nine-chi.vercel.app', },
                    { id: 2, target: '_blank', image: '/icons/github.svg', link: 'https://github.com/Onyxmoises3035/Poke.git', },
                ],
        },
    ]

    return (
        <div id="projects" className="section grid grid-cols-4">
            {projects.map(project => (
                <CardP key={project.id} id={project.id} name={project.name} links={project.links} image={project.image} tecs={project.tecs} lan={lan} />
            ))}
        </div>
    )
}

export default Projects;