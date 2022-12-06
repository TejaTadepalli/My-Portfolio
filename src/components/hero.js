import {BsLinkedin,BsGithub} from "react-icons/bs"   //we are supposed to type the directory as first two letters of the name of the icon

const Hero=()=> {
return<>
    <div className={" container max-auto p-4"}>
        <div className={"grid grid-cols-2"}>
            <div className={"flex flex-col justify-self-center"}>
                <h1 className={"text-xl text-black font-medium"}>Heyyy 👋</h1>
                <h2 className={"text-4xl text-black font-bold"}>I'm Teja</h2>
                <h3 className={"text-xl text-black font-medium"}>From Pune, India{/*Full Stack Developer*/}</h3>
                <div className={"flex items-center gap-4 mt-4"}>
                    <a  href={"https://www.linkedin.com/in/teja-tadepalli-050291222/"}
                        target={"_blank"}   //this is to open the link in a new tab
                        rel={"noreferrer"}
                        referrerPolicy={"no-referrer"}  //done for security reasons
                    >
                        <button className={"text-2xl"}>
                            <BsLinkedin />
                        </button>
                    </a>
                    <a  href={"https://github.com/TejaTadepalli"}
                        target={"_blank"}   //this is to open the link in a new tab
                        rel={"noreferrer"}
                        referrerPolicy={"no-referrer"}  //done for security reasons
                    >
                        <button className={"text-2xl"}>
                            <BsGithub />
                        </button>
                    </a>
                </div>
            </div>
            <div className={"flex justify-self-center"}>
                <div className={"bg-white rounded-full"} style={{width:'200px',height:'200px'}}>
                    <img    className={"rounded-full w-full h-full object-cover"}
                            src="https://avatars.githubusercontent.com/u/91416443?s=400&u=b3db396334cff8d7d6a808cd1a389e2070c99a09&v=4"
                            alt={"Profile"} 
                    />
                </div>
            </div>
        </div>
    </div>
</>
}

export default Hero