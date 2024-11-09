import { useEffect } from "react";
import Image from "next/image";
import IconsC from "./IconsC";

const CardP = ({ id, name, image, links, tecs, lan }) => {

    useEffect(() => {
        const cont = document.getElementById(`cont${id}`);
        const video = document.getElementById(`vid${id}`);

        cont.addEventListener('mouseenter', () => {
            video.play();
        });

        cont.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    })

    return (
        <div id={`cont${id}`} className="group flex justify-center content-center flex-col w-72 h-fit py-2 hover:scale-125 transition-all duration-200 mx-5 my-2 
        bg-white bg-opacity-40 rounded-lg
        dark:bg-black dark:bg-opacity-40
        ">
            <a href='' target="_blank">
                <Image className="group-hover:hidden" src={image} height={300} width={300} alt={name} />
                <video id={`vid${id}`} className="hidden group-hover:block" loop muted src="/images/preview/pet/video.mp4"></video>
            </a>
            <h1 className="text-sm my-1 mx-3">{lan['projects'][`pro${id}`]}</h1>
            <div className="flex flex-row h-fit mt-2 w-full justify-center content-center">
                {tecs.map(tec => (
                    <IconsC key={tec.id} image={tec.image} />
                ))}
            </div>
            <div className="flex flex-row h-fit mt-2 w-full justify-center content-center">
                {links.map(link => (
                    <IconsC key={link.id} target={link.target} image={link.image} link={link.link} />
                ))}
            </div>
        </div>
    )
}

export default CardP;