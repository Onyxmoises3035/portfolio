import Image from "next/image";

const IconsC = ({ image, link, target }) => {
    return (
        <a className="m-1" href={link} target={target}>
            <Image className="!h-full" src={image} height={30} width={30}></Image>
        </a>
    )
}

export default IconsC;