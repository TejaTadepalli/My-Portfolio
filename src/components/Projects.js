const Projects = () => {
    const project=[
        {
            title:"Coding Practice",
            duration:"Ongoing",
            type:"Individual",
            demo:"https://github.com/TejaTadepalli/Coding-Practice",
            code:"https://github.com/TejaTadepalli/Coding-Practice",
        },
        {
            title:"Netflix Clone",
            duration:"1 Month",
            type:"Individual",
            demo:"https://netflix-clone-teja.netlify.app/",
            code:"https://github.com/TejaTadepalli/Netflix-Clone",
        },
        {
            title:"Portfolio",
            duration:"1 Week",
            type:"Collaborative",
            demo:"https://my-portfolio-lac-rho.vercel.app/",
            code:"https://github.com/TejaTadepalli/My-Portfolio",
        },
        {
            title:"FIFA 2022 World Cup: Prediction",
            duration:"2 Days",
            type:"Individual",
            demo:"https://github.com/TejaTadepalli/FIFA-2022-World-Cup-Prediction/blob/main/FIFA2022_predictions.ipynb",
            code:"https://github.com/TejaTadepalli/FIFA-2022-World-Cup-Prediction",
        },
        {
            title:"Sales Analysis",
            duration:"2 Days",
            type:"Individual",
            demo:"https://github.com/TejaTadepalli/Sales-Analysis/blob/main/SalesAnalysis.ipynb",
            code:"https://github.com/TejaTadepalli/Sales-Analysis",
        },
        {
            title:"Memory Monitor",
            duration:"2 Days",
            type:"Individual",
            demo:"https://github.com/TejaTadepalli/Memory-Monitor",
            code:"https://github.com/TejaTadepalli/Memory-Monitor",
        },
        {
            title:"Python Minesweeper Game",
            duration:"1 Week",
            type:"Collaborative",
            demo:"https://github.com/TejaTadepalli/Python-Minesweeper",
            code:"https://github.com/TejaTadepalli/Python-Minesweeper",
        },
    ];

    return <>
        <div className={"container mx-auto flex flex-col items-center gap-4"}>
            <h1 className={"text-4xl text-black font-bold"}>Projects</h1>
            <div className={"mt-4 w-4/5"}>
            <table class="table-auto border-collapse border border-slate-500 w-full">
                <thead className={"w-full"}>
                    <tr>
                        <th className={"border border-black"}>Title</th>   {/*"th" stands for Table Heading*/}
                        <th className={"border border-black"}>Duration</th>
                        <th className={"border border-black"}>Type</th>
                        <th className={"border border-black"}>Demo</th>
                        <th className={"border border-black"}>Source</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        project.map((project,index)=>{
                            return( 
                            <tr key={index}>
                                <td className={"w-1/5 text-center border border-black"}>{project.title}</td>
                                <td className={"w-1/5 text-center border border-black"}>{project.duration}</td>
                                <td className={"w-1/5 text-center border border-black"}>{project.type}</td>
                                <td className={"w-1/5 text-center border border-black"}>
                                    <a  className={"text-blue-500 hover:text-blue-800"}
                                        href={project.demo}
                                    >
                                        Click Here
                                    </a>
                                </td>
                                <td className={"w-1/5 text-center border border-black"}>
                                    <a  className={"text-blue-500 hover:text-blue-800"}
                                        href={project.code}
                                    >
                                        Click Here
                                    </a>
                                </td>
                            </tr>)
                        }
                        )
                    }
                    {/*<tr>
                        <td className={"w-1/5 text-center border border-black"}>React</td>
                        <td className={"w-1/5 text-center border border-black"}>3 Months</td>
                        <td className={"w-1/5 text-center border border-black"}>Collaborative</td>
                        <td className={"w-1/5 text-center border border-black"}>
                            <a  className={"text-blue-500 hover:text-blue-800"}
                                href="https://reactjs.org/"
                            >
                                Click Here
                            </a>
                        </td>
                        <td className={"w-1/5 text-center border border-black"}>
                            <a  className={"text-blue-500 hover:text-blue-800"}
                                href="https://github.com/facebook/react/"
                            >
                                Click Here
                            </a>
                        </td>
                    </tr>*/
                    }
                </tbody>
            </table>
            </div>
        </div>
    </>
}

export default Projects
