export default {
    lang: 'es',
    bar: {
        sec01: 'Sobre mi',
        sec02: 'Habilidades',
        sec03: 'Proyectos',
        sec04: 'Educación',
        sec05: 'Contacto',
    },
    about_me: {
        p1: 'Bienvenido a mi portafolio de programación',
        p2: 'Soy Moises, Técnico en programación con interés en seguir aprendiendo en todo momento.',
        p3: '+2 años de experiencia freelance en realización de proyectos web.',
        p4: 'Si quieres ponerte en contacto conmigo escríbeme al correo: ',
        des: 'Descargar CV',
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
            title: 'Otros',
            icons: [
                { id: 1, image: '/icons/git.svg', text: 'Git' },
            ]
        },
        {
            id: 4,
            title: 'Aprendiendo',
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
            info: 'Pokedex, proyecto para la obtención de información de Pokémon utilizando PokeApi',
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
            info: 'Gabow, mapas interactivos de micro ecosistemas como hospitales, museos, parques, etc.',
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
            info: 'PetAlert, pagina para ayudar a personas a encontrar sus mascotas perdidas',
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
    ],
    education: {
        courses: [
            { id: 5, place: 'Udemy "Python: Programación en Python desde cero"', title: 'Programación en Python' },
            { id: 4, place: 'Udemy "React: De cero a experto ( Hooks y MERN )"', title: 'Programación en React' },
            { id: 2, place: 'ALURA Latam "HTML5 y CSS3 Part.1, 2, 3 y 4"', title: 'HTML5 y CSS3' },
            { id: 3, place: 'ALURA Latam "Lógica de programación Part.1 y 2"', title: 'Lógica de programación' },
            { id: 1, place: 'Centro de Estudios Científicos y Tecnológicos N° 9 "Juan de Dios Bátiz"', title: 'Técnico en programación' },
        ]
    },
    contact: {
        p1: 'Me puedes contactar a través de:',
        p2: 'Esta pagina web fue desarrollada con:',
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