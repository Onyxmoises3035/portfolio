export default {
    lang: 'en',
    bar: {
        sec01: 'About me',
        sec02: 'Skills',
        sec03: 'Projects',
        sec04: 'Education',
        sec05: 'Contact',
    },
    about_me: {
        p1: 'Welcome to my programming portfolio',
        p2: 'I am Moises, a programming technician interested in continuing to learn at all times.',
        p3: '+2 years of freelance experience in web project development.',
        p4: 'If you want to contact me, write to me at: ',
        des: 'Download CV',
        links: [
            { id: 1, target: '_blank', image: '/icons/github.svg', link: 'https://github.com/Onyxmoises3035' },
            { id: 2, target: '', image: '/icons/gmail.svg', link: 'mailto:maumoy1229@gmail.com' },
            { id: 3, target: '_blank', image: '/icons/linkedin.svg', link: 'https://www.linkedin.com/in/moises-moreno-79b4a028a/' },
        ]
    },
    skills: [
        {
            id: 1,
            title: 'Frontend',
            icons: [
                { id: 1, image: '/icons/html.svg', text: 'HTML' },
                { id: 2, image: '/icons/css.svg', text: 'CSS' },
                { id: 3, image: '/icons/js.svg', text: 'JavaScript' },
                { id: 4, image: '/icons/next.svg', text: 'NextJs' },
                { id: 5, image: '/icons/react.svg', text: 'React' },
                { id: 6, image: '/icons/tail.svg', text: 'Tailwind' },
            ]
        },
        {
            id: 2,
            title: 'Backend',
            icons: [
                { id: 1, image: '/icons/python.svg', text: 'Python' },
                { id: 2, image: '/icons/mysql.svg', text: 'MySQL' },
                { id: 3, image: '/icons/node.svg', text: 'Node' },
            ]
        },
        {
            id: 3,
            title: 'Other',
            icons: [
                { id: 1, image: '/icons/git.svg', text: 'Git' },
            ]
        },
        {
            id: 4,
            title: 'Learning',
            icons: [
                { id: 1, image: '/icons/flut.svg', text: 'Flutter' },
                { id: 2, image: '/icons/ang.svg', text: 'Angular' },
            ]
        },
    ],
    projects: [
        {
            id: 1,
            name: 'Pokedex',
            info: 'Pokedex, a project to obtain information about Pokémon using PokeApi',
            image: '/images/preview/poke/logo.webp',
            video: '/images/preview/poke/video.mp4',
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
            info: 'Gabow, maps of micro ecosystems such as hospitals, museums, parks, etc.',
            image: '/images/preview/gabow/logo.png',
            video: '',
            tecs: [
                { id: 1, image: '/icons/next.svg', text: 'NextJs' },
                { id: 2, image: '/icons/tail.svg', text: 'Tailwind' },
                { id: 3, image: '/icons/react.svg', text: 'React' },
            ],
            links:
                [
                    { id: 1, target: '_blank', image: '/icons/link.svg', link: 'https://gabow-eight.vercel.app', },
                ],
        },
        {
            id: 3,
            name: 'PetAlert',
            info: 'PetAlert, a website to help people find their lost pets',
            image: '/images/preview/pet/logo.png',
            video: '',
            tecs: [
                { id: 1, image: '/icons/next.svg', text: 'NextJs' },
                { id: 2, image: '/icons/tail.svg', text: 'Tailwind' },
                { id: 3, image: '/icons/react.svg', text: 'React' },
                { id: 4, image: '/icons/python.svg', text: 'Python' },
            ],
            links:
                [
                    // { id: 1, target: '_blank', image: '/icons/link.svg', link: '', },
                    // { id: 2, target: '_blank', image: '/icons/github.svg', link: '', },
                ],
        },
    ],
    education: {
        courses: [
            { id: 5, place: 'Udemy "Python: Programación en Python desde cero"', title: 'Programming in Python' },
            { id: 4, place: 'Udemy "React: De cero a experto ( Hooks y MERN )"', title: 'Programming in React' },
            { id: 2, place: 'ALURA Latam "HTML5 y CSS3 Part.1, 2, 3 y 4"', title: 'HTML5 y CSS3' },
            { id: 3, place: 'ALURA Latam "Lógica de programación Part.1 y 2"', title: 'Programming logic' },
            { id: 1, place: 'Centro de Estudios Científicos y Tecnológicos N° 9 "Juan de Dios Bátiz"', title: 'Programming Technician' },
        ]
    },
    contact: {
        p1: 'You can contact me through:',
        p2: 'This website was developed with:',
        contacts: [
            { id: 1, target: '_blank', image: '/icons/whats.svg', link: 'https://wa.me/525612942945', name: '+52 56 1294 2945' },
            { id: 2, target: '', image: '/icons/gmail.svg', link: 'mailto:maumoy1229@gmail.com', name: 'maumoy1229@gmail.com' },
            { id: 3, target: '_blank', image: '/icons/linkedin.svg', link: 'https://www.linkedin.com/in/moises-moreno-79b4a028a/', name: 'linkedin.com' },
        ],
        webDev: [
            { id: 2, image: '/icons/next.svg', text: 'next' },
            { id: 1, image: '/icons/react.svg', text: 'react' },
            { id: 3, image: '/icons/tail.svg', text: 'tail' },
        ],
    }
}