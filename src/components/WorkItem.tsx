import Item from "./Item";

export default function WorkItem({
    workTitle,
    workObject
}: {
    workTitle: string;
    workObject: {
        title: string;
        duration: string;
        description?: string[];
        link?: string;
        stack?: string[];
        github?: string;
        live?: string;
        building?: boolean;
    }[]
    }
) {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-extrabold tracking-tight text-xl items-center flex"><span className="inline-flex items-center justify-center w-6 h-6 bg-neutral-900 leading-none mr-2 text-base shadow-[inset_0_2px_4px_0_rgba(100,100,100,0.2)]">./</span>{workTitle}</div>
            <div className="flex flex-col pl-2 gap-[8px] border-l-[2px] border-neutral-800">
                {workObject.map((wo, idx) => (
                    <div key={idx}>
                        {wo.link ? (
                            <a href={`/blogs/${wo.link}`}>
                                <Item 
                                    title={wo.title} 
                                    description={wo.description} 
                                    duration={wo.duration} 
                                    stack={wo.stack} 
                                    github={wo.github}
                                />
                            </a>
                        ) : wo.live ? (
                            <a href={wo.live} target="_blank" rel="noopener noreferrer">
                                <Item 
                                    title={wo.title} 
                                    description={wo.description} 
                                    duration={wo.duration} 
                                    stack={wo.stack} 
                                    github={wo.github}
                                    building={wo.building}
                                />
                            </a>
                        ) : (
                            <Item 
                                title={wo.title} 
                                description={wo.description} 
                                duration={wo.duration} 
                                stack={wo.stack} 
                                github={wo.github}
                                building={wo.building}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}