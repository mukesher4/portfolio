import { SiExpress, SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiEthereum, SiPython, SiDocker } from 'react-icons/si'
import { JSX } from 'react';

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
    'express': <SiExpress className="w-4 h-4" />,
    'solidity': <SiEthereum className="w-4 h-4" />,
    'python': <SiPython className="w-4 h-4" />,
    'docker': <SiDocker className="w-4 h-4" />
} as TechIcon;