import Logo from './logo';

const Skills = () => {
    const logos=[
        {
            name:"React",
            src:"https://cdn.worldvectorlogo.com/logos/react-2.svg"
        },
        {
            name:"HTML",
            src:"https://cdn.worldvectorlogo.com/logos/html-1.svg"
        },
        {
            name:"CSS",
            src:"https://cdn.worldvectorlogo.com/logos/css-3.svg"
        },
        {
            name:"Javascript",
            src:"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        },
        {
            name:"Python",
            src:"https://cdn.worldvectorlogo.com/logos/python-5.svg"
        },
        {
            name:"C++",
            src:"https://cdn.worldvectorlogo.com/logos/c.svg"
        },
        {
            name:"Java",
            src:"https://cdn.worldvectorlogo.com/logos/java-4.svg"
        },
        {
            name:"MySQL",
            src:"https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
        },
        {
            name:"MongoDB",
            src:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
        },
        {
            name:"NodeJS",
            src:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        },
        {
            name:"GitHub",
            src:"https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
        },
        {
            name:"Git",
            src:"https://cdn.worldvectorlogo.com/logos/git-icon.svg"
        },
        {
            name:"Redux",
            src:"https://cdn.worldvectorlogo.com/logos/redux.svg"
        },
        {
            name:"TailwindCSS",
            src:"https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
        },
        {
            name:"Firebase",
            src:"https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
        },
        {
            name:"Visual Studio Code",
            src:"https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
        },
    ];

return<>
    <div className={"container mx-auto flex flex-col items-center gap-4"}>
        <h1 className={"text-4xl text-black font-bold"}>My Skills</h1>
        <div className="flex flex-wrap gap-14 justify-around mt-8">
            {/*<div className="w-14 h-14">
                <img    className={"w-full h-full"} 
                        src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} 
                        alt={"React"}
                />
                </div>
                <h1 className={"text-xl text-black font-medium"}>React</h1>*/
            }
            {/* <Logo   src={""}
                        name={"CSS"}
                />*/
            }
            {
                logos.map((logo,index)=>{
                    return  <Logo   src={logo.src}
                                    name={logo.name}
                                    key={index}
                            />
                })
            }
        </div>
    </div>
  </>
}

export default Skills