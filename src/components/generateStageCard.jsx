

function GenerateStageCard( { stage }) {
    return (
        <>
            <ul className="flex flex-col gap-2">
                {
                    stage.map((item, itemIndex) => {
                        return (
                            <li key={itemIndex} className="flex gap-4 text-white">
                                <svg className="text-primary w-5 lg:w-8 h-auto rotate-90" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" d="m112 244l144-144l144 144M256 120v292"/></svg>
                                {item}
                            </li>
                        );

                    })
                }
            </ul>
        </>
            
    )
}

export default GenerateStageCard;