import CardE from "./CardE";

const Education = ({ lan }) => {
    return(
        <div id="education" className="section">
          {lan.education.courses.map(course => (
            <CardE key={course.id} place={course.place} title={course.title} />
          ))}
        </div>
    )
}

export default Education;