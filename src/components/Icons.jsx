import Image from "next/image";

const Icons = ({ image, text }) => {
    return (
        <div className="flex flex-col content-center justify-center">
            <div className="flex justify-center flex-col text-center
            bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-40 
            m-3 p-5 rounded-lg size-20 shadow-2xl mb-0">
                <Image height={80} width={80} src={image} alt={text} />
            </div>
            {/* <h1 className="text-sm">{text}</h1> */}
        </div>
    );
}

export default Icons;