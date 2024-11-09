import Image from "next/image";

const IconsList = ({ title, icons }) => {
    return (
        <div>
            <h1 className="mt-5">{title}</h1>
            <div className="w-full flex flex-row content-center justify-center flex-wrap">
                {icons.map(icon => (
                    <div key={icon.id}>
                        <div className="flex flex-col content-center justify-center">
                            <div className="flex justify-center flex-col text-center
                                        bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-40 
                                        m-3 p-5 rounded-lg size-20 shadow-2xl mb-0">
                                <Image height={80} width={80} src={icon.image} alt={icon.text} />
                            </div>
                            {/* <h1 className="text-sm">{icon.text}</h1> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default IconsList;