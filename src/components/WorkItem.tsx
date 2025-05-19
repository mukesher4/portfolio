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
    }[]
    }
) {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-bold">./{workTitle}</div>
            <div className="flex flex-col pl-2 gap-4">
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
                                />
                            </a>
                        ) : (
                            <Item 
                                title={wo.title} 
                                description={wo.description} 
                                duration={wo.duration} 
                                stack={wo.stack} 
                                github={wo.github}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}