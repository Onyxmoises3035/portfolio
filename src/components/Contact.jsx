import IconsC from "./IconsC";
import Image from "next/image";

const Contact = ({ lan }) => {

    return (
        <div id="contact" className="section relative">
            <h1>{lan.contact.p1}</h1>
            <div className="flex flex-col content-center justify-center flex-wrap">
                {lan.contact.contacts.map(contact => (
                    <IconsC key={contact.id} image={contact.image} target={contact.target} link={contact.link} name={contact.name} />
                ))}
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-10">
                <h1 className="text-sm">{lan.contact.p2}</h1>
                <div className="flex justify-center">
                    {lan.contact.webDev.map(icon => (
                        <div key={icon.id} className="mx-5 mt-2 bg-black bg-opacity-30 rounded-full p-1 flex justify-center">
                            <Image src={icon.image} alt={icon.text} height={25} width={25}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact;