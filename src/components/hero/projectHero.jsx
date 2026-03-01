import GenerateProjectCard from "../../components/generateProjectCard";
import BlurText from "../BlurText";

function ProjectHero() {
    return (
        <section className="h-auto bg-black-100 flex flex-col gap-7 md:gap-13">
            <div className="md:w-3/4 xl:w-2/3 flex flex-col gap-4">
                <p>
                    <BlurText 
                        text="MY WORKS"
                        delay={200}
                        animateBy="words"
                        direction="top"
                        className="block"
                    />
                </p>
                <h2>
                    <BlurText 
                        text="SOME PROJECTS THAT I WORKED ON"
                        delay={200}
                        animateBy="words"
                        direction="top"
                        className="block"
                    />
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center auto-rows-fr">
                <GenerateProjectCard />
            </div>
        </section>
    )
}

export default ProjectHero;