
import GenerateStageCard from "../../components/generateStageCard";
import handshakeImg from "../../assets/images/hero/process/handShake.jpg";
import patternImg from "../../assets/images/hero/process/pattern.jpg";
import laptopImg from "../../assets/images/hero/process/laptop.jpg";

const stages = {
    stage1: [
        "Client Onboarding",
        "kick-Off Call",
        "Research Industry & Trends",
        "Website Strategy",
        "Visual Direction",
    ],
    stage2: [
        "Sitemap",
        "Wireframes",
        "Data Collection",
        "Feedback & Iteration",
    ],
    stage3: [
        "Setup Branding Styles",
        "Design in Figma",
        "Feedback & Iteration"
    ],
    stage4: [
        "Testing",
        "Offboarding",
        "Turnover",
        "Launch",
    ]

}

function ProcessHero() {
    return (
        <section className="bg-black-200 flex flex-col gap-4">
            <div className="flex gap-4">
                <div className="bg-black-300 p-8 rounded-3xl flex flex-col justify-between gap-8 w-1/2">
                    <div className="flex flex-col gap-4">
                        <p>OUR PROCESS</p>
                        <h2>SO, HOW DO WE DO IT?</h2>
                    </div>
                    <svg className="text-primary w-5 lg:w-8 h-auto rotate-180" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" d="m112 244l144-144l144 144M256 120v292"/></svg>
                </div>

                <div className="bg-black-300 hidden md:flex h-auto justify-center items-end rounded-3xl overflow-hidden w-1/2">
                    <img className="h-1/2 w-full object-cover" src={handshakeImg} alt="Handshake" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="bg-black-300 p-8 rounded-3xl flex flex-col gap-8 h-full">
                        <h3 className="font-bold">STAGE 1</h3>
                        <GenerateStageCard stage={stages.stage1} />
                    </div>

                    <div className="bg-black-300 p-8 rounded-3xl flex flex-col gap-8 h-full">
                        <h3 className="font-bold">STAGE 2</h3>
                        <GenerateStageCard stage={stages.stage2} />
                    </div>
                </div>

                <div className="bg-black-300 rounded-3xl flex flex-col justify-between gap-8 w-full overflow-hidden">
                    <div className="p-8 flex flex-col gap-8">
                        <h3 className="font-bold">STAGE 3</h3>
                        <GenerateStageCard stage={stages.stage3} />
                    </div>
                    <div className="h-1/2 overflow-hidden">
                        <img className="h-full w-full object-cover" src={patternImg} alt="Stage 3" />
                    </div>
                </div>

                <div className="bg-black-300 rounded-3xl flex flex-col justify-between gap-8 w-full overflow-hidden">
                    <div className="p-8 flex flex-col gap-8">
                        <h3 className="font-bold">STAGE 4</h3>
                        <GenerateStageCard stage={stages.stage4} />
                    </div>
                    <div className="h-1/2 overflow-hidden">
                        <img className="h-full w-full object-cover scale-101" src={laptopImg} alt="Stage 4" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessHero;