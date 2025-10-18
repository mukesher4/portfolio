"use client"
import { useRef, useEffect, useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'
import CircularLoader from './CircularLoader';
import parse from 'html-react-parser';
import { techIcon } from '@/utils/techIcon'

export default function Item({
    title,
    duration,
    description,
    stack,
    github,
    building,
    live,
    video,
}: {
    title: string;
    duration: string;
    description?: string[];
    stack?: string[];
    github?: string;
    building?: boolean;
    live?: string;
    video?: string;
}) {
    const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
    const hoverDelay = 1000; // 1 second
    const [isExpanded, setIsExpanded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showLoader, setShowLoader] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (video) {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setShowLoader(true);
            hoverTimerRef.current = setTimeout(() => {
                setIsExpanded(true);
            }, hoverDelay);
        }
    };

    const handleMouseLeave = () => {
        if (video) {
            setShowLoader(false);
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
            setIsExpanded(false);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (showLoader) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };

    useEffect(() => {
        return () => {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
        };
    }, []);

    return (
        <div
            className="border-2 border-transparent hover:border-neutral-600 hover:border-opacity-30 p-2 relative group" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-t-white/5 group-hover:border-t-neutral-600 group-hover:border-opacity-30 border-l-white/5 group-hover:border-l-neutral-600'></div>
            <div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-t-white/5 border-r-white/5 group-hover:border-opacity-30 group-hover:border-t-neutral-600 group-hover:border-r-neutral-600'></div>
            <div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-b-white/5 border-l-white/5 group-hover:border-opacity-30 group-hover:border-b-neutral-600 group-hover:border-l-neutral-600'></div>
            <div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-b-white/5 border-r-white/5 group-hover:border-opacity-30 group-hover:border-b-neutral-600 group-hover:border-r-neutral-600'></div>
            <div className="w-full flex justify-between items-start">
                    <div className='flex flex-row gap-4 items-center'>
                        {/* <u className="pb-1 text-[20px] underline-offset-4 decoration-1">{title}</u> */}
                        <span className="pb-1 text-md font-[500]">{title}</span>
                        {stack && (
                            <div className="flex gap-2">
                                {stack.map((tech, idx) => (
                                    <div key={idx}>{techIcon[tech]}</div>
                                ))}
                            </div>
                        )}
                        {building && (
                            <div className="flex items-center justify-center">
                                <div className="text-[12px] text-neutral-400 italic">{'[Building]'}</div>
                            </div>
                        )}
                    </div>
                    <div className='flex gap-4 items-center'>
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='cursor-pointer text-neutral-400/70 hover:text-neutral-400'
                            >
                                <FaLink className='w-4 h-4'/>
                            </a>
                        )}                        
                        {github &&
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='cursor-pointer text-neutral-400/70 hover:text-neutral-400'
                            >
                                <FaGithub className='w-5 h-5'/>
                            </a>
                        }
                        <span className="text-xs text-neutral-500">{duration}</span>
                    </div>
                </div>
                <ul className="pl-4 space-y-2 text-sm">
                    {description?.map((desc, idx) => (
                        <div key={idx} className='flex flex-row gap-1'>
                            <div className='text-neutral-600'>{'-'}</div>
                            <li className="text-neutral-400">{parse(desc)}</li>
                        </div>
                    ))}
                </ul>
                {video && (
                    <div
                        className={`flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden ${
                            isExpanded ? 'max-h-[500px] my-2 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{
                            transformOrigin: 'top',
                        }}
                    >
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline 
                            className="w-[95%] h-auto rounded"
                        >
                        Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            {showLoader && video && (
                <div
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: mousePosition.x + 24,
                        top: mousePosition.y + 24,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <CircularLoader duration={hoverDelay} />
                </div>
            )}
        </div>
    );
}