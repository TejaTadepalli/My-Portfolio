import { BsGithub, BsLinkedin } from "react-icons/bs";

const About=()=>{
    return<>
        <div className={"container mx-auto flex flex-col items-center gap-4 pb-10"}>
            <h1 className={"text-4xl text-black font-bold"}>About Me</h1>
            <div className={"w-3/5 flex flex-col gap-4"}>
                <p className={"text-lg text-black font-medium text-center"}>
                    Hey this is <strong className={"text-blue-800"}>Teja Tadepalli</strong>. I'm in my Third Year of <strong className={"text-blue-800"}>Computer Engineering</strong>. 
                    I am passionate about learning new things and building things that help people. I am currently learning <strong className={"text-blue-800"}>ReactJS</strong> and 
                    other <strong className={"text-blue-800"}>Web Development</strong> Technologies. I also want to explore <strong className={"text-blue-800"}>Data Science</strong> 
                    as a career option. I love <strong className={"text-orange-500"}>music</strong>, <strong className={"text-orange-500"}>art</strong> and <strong className={"text-orange-500"}>
                    reading books</strong>.
                </p>
                <div className={"flex flex-col items-center bg-purple-500 dark:bg-violet-800 border-2 border-dashed border-white rounded-full py-4"}>
                    <h3 className={"text-2xl font-bold text-white"}>Contact Details:</h3>
                    <h4 className={"text-xl text-white"}>
                        <a  href={'mailto:teja.tadepalli@yahoo.in'}>teja.tadepalli@yahoo.in</a>
                    </h4>
                    <div className={"flex items-center gap-4 mt-4 text-white"}>
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
            </div>
        </div>
    </>
}

export default About;