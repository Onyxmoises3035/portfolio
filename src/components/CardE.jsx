
const CardE = ({ place, title }) => {
    return (
        <div className="text-justify flex w-full justify-center m-5">
            <div className="flex flex-col justify-start w-1/2">
                <h1 className="text-lg font-semibold">{place}</h1>
                <h1 className="text-base">{title}</h1>
            </div>
        </div>
    )
}

export default CardE;