import { Key } from "react";
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
            <div className="font-bold">{workTitle}</div>
            <div className="flex flex-col pl-2 gap-4">
                {workObject.map((wo: { title: string; description?: string[]; duration: string; link?: string; stack?: string[]; github?: string; live?: string; }, idx: Key | null | undefined) => (
                    <Item key={idx} title={wo.title} description={wo.description} duration={wo.duration} link={wo.link} stack={wo.stack} github={wo.github} live={wo.live}/>
                ))}
            </div>
        </div>
    )
}