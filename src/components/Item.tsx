import { JSX } from 'react';
import { SiExpress, SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'

type TechIcon = {
    [key: string]: JSX.Element
}

export const techIcon = {
    'nextjs': <SiNextdotjs className="w-4 h-4" />,
    'postgresql': <SiPostgresql className="w-4 h-4" />,
    'tailwindcss': <SiTailwindcss className="w-4 h-4" />,
    'typescript': <SiTypescript className="w-4 h-4" />,
    'mongodb': <SiMongodb className="w-4 h-4" />,
    'react': <SiReact className="w-4 h-4" />,
    'express': <SiExpress className="w-4 h-4" />
} as TechIcon;

export default function Item({
    title,
    duration,
    description,
    stack,
    github,
    building,
}: {
    title: string;
    duration: string;
    description?: string[];
    stack?: string[];
    github?: string;
    building?: boolean;
}) {
    return (
        <div className="border-2 border-transparent hover:border-neutral-600 hover:border-opacity-30 p-2">
            <div>
                <div className="w-full flex justify-between items-start">
                    <div className='flex flex-row gap-4 items-center'>
                        <u className="pb-1 underline-offset-4">{title}</u>
                        {stack && (
                            <div className="flex gap-2">
                                {stack.map((tech, idx) => (
                                    <div key={idx}>{techIcon[tech]}</div>
                                ))}
                            </div>
                        )}
                        {building && (
                            <div className="flex items-center justify-center">
                                <div className="text-sm text-neutral-400">{'[Building]'}</div>
                            </div>
                        )}
                    </div>
                    <div className='flex gap-4 items-center'>
                        {github && 
                            <a 
                                href={github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='cursor-pointer hover:text-neutral-400'
                            >
                                <FaGithub className='w-5 h-5'/>
                            </a>
                        }
                        <span className="text-sm">{duration}</span>
                    </div>
                </div>
                <ul className="space-y-2 text-neutral-400">
                    {description?.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}