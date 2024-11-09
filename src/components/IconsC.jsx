import Image from "next/image";

const IconsC = ({ image, link, target, name }) => {
    return (
        <div className="flex items-center">
            <a className="m-3 mx-3" href={link} target={target}>
                <Image className="!h-full" src={image} height={30} width={30} alt='error'></Image>
            </a>
            {name ?
                <a className="underline" href={link} target={target}>{name}</a>
                :
                <></>
            }
        </div>
    )
}

export default IconsC;