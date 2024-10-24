
const About_me = ({ lan }) => {
    return (
        <div id="about_me" className="section">
            <h1 className="text-sm opacity-50">**foto**</h1>
            <br />
            <p>{lan.about_me.p1}</p>
            <br />
            <p>{lan.about_me.p2}<br />{lan.about_me.p3}</p>
            <br />
            <p>{lan.about_me.p4}</p>
            <br />
            <h1 className="text-sm opacity-50">**redes sociales / Botón para descargar cv**</h1>
        </div>
    )
}

export default About_me;