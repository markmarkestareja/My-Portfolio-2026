import {projects} from "../data/projects.jsx";

function GenerateProjectCard(){
    return (
        <>
            {
                projects.map(({ id, title, year, img, link, techStacks}) => {
                    return (
                        <div className="bg-black-300 rounded-3xl max-w-[500px] h-full flex flex-col justify-between" key={id}>
                            <div className="flex flex-col gap-4 p-6">
                                <ul className="flex gap-4">
                                    {techStacks.map((techStack, index) => {
                                        return (
                                            <li key={index}>{techStack}</li>
                                        );
                                    })}
                                </ul>
                                <h3>{title}</h3>
                                <p>{year}</p>
                                <a href={link}>VISIT THE WEBSITE →</a>
                            </div>
                            <img src={img} alt="" className="w-full"/>
                        </div>
                    );
                })
            }
        </>
    )
}

export default GenerateProjectCard;