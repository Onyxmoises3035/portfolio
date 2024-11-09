import IconsC from "./IconsC";

const About_me = ({ lan }) => {

    return (
        <div id="about_me" className="section">
            <p className="text-5xl">{lan.about_me.p1}</p>
            <br />
            <p className="text-2xl">{lan.about_me.p2}<br />{lan.about_me.p3}</p>
            <br />
            <p className="text-2xl">{lan.about_me.p4}<a href="mailto:maumoy1229@gmail.com" className="underline font-semibold">maumoy1229@gmail.com</a></p>
            <br />
            <div className="m-5">
                <a className="p-3 rounded-xl shadow-lg transition-all duration-200
                            bg-white hover:bg-red-700 bg-opacity-40 
                            dark:bg-black dark:hover:bg-lime-500 dark:bg-opacity-40"
                    href="/docs/CV_Moises_Moreno_2024.pdf"
                    download>
                    {lan.about_me.des}
                </a>
            </div>
            <div className="w-full flex justify-center">
                {lan.about_me.links.map(link => (
                    <IconsC key={link.id} image={link.image} link={link.link} target={link.target}></IconsC>
                ))}
            </div>
        </div>
    )
}

export default About_me;