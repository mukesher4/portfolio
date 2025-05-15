import { JSX } from 'react';
import { SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type TechIcon = {
    [key: string]: JSX.Element
}

export const techIcon = {
    'nextjs': <SiNextdotjs className="w-5 h-5" />,
    'postgresql': <SiPostgresql className="w-5 h-5" />,
    'tailwindcss': <SiTailwindcss className="w-5 h-5" />,
    'typescript': <SiTypescript className="w-5 h-5" />,
    'mongodb': <SiMongodb className="w-5 h-5" />,
    'react': <SiReact className="w-5 h-5" />
} as TechIcon;

export default function Item({
    title,
    duration,
    description,
    link,
    stack,
    github,
    live,
}: {
    title: string;
    duration: string;
    description?: string[];
    link?: string;
    stack?: string[];
    github?: string;
    live?: string;
}) {
    return (
        <div className="border-2 border-transparent hover:border-neutral-600 hover:border-opacity-30 p-2">
            <div>
                <div className="w-full flex justify-between items-start">
                    <div className='flex flex-row gap-4 items-center'>
                        {link ? (
                            <a 
                                href={`/blogs/${link}`} 
                                className="hover:text-neutral-400 cursor-pointer"
                            >
                                <u className="pb-1 underline-offset-4">{title}</u>
                            </a>
                        ) : live ? (
                            <a 
                                href={live} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-neutral-400 cursor-pointer"
                            >
                                <u className="pb-1 underline-offset-4">{title}</u>
                            </a>
                        ) : (
                            <u className="pb-1 underline-offset-4">{title}</u>
                        )}
                        {stack && (
                            <div className="flex gap-2">
                                {stack.map((tech, idx) => (
                                    <div key={idx}>{techIcon[tech]}</div>
                                ))}
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
                <ul>
                    {description?.map((desc, idx) => (
                        <li key={idx} className="text-neutral-400">{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}