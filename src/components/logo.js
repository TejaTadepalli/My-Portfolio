const Logo = (props) => {
    return <>
        <div className="flex flex-col">
                <div className="w-14 h-14">
                    <img    className={"w-full h-full"} 
                            src={props.src}
                            alt={props.name}
                    />
                </div>
                <h1 className={"text-xl text-black font-medium"}>{props.name}</h1>
            </div>
    </>
}

export default Logo