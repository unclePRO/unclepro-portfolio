import { FaGithub, FaAngleDoubleDown, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HackerShuffle from '../ext/HackerShuffle';
import DrawOutlineButton from '../ext/DrawOutlineButton'
import { useState } from 'react';

const links = [
    { icon: FaGithub, href: "https://github.com/unclepro", label: "Github" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/unclepro", label: "LeetCode" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/aviralpan", label: "LinkedIn" },
];

export default function Page1() {
    const [ hidePage, setHidePage ] = useState(false);

    if (hidePage) {
        return (
            <div className='relative w-[70vw] h-[70vh] flex flex-col justify-between items-center rounded-3xl pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md overflow-hidden'>
                <div className="absolute top-10 left-10">
                    <DrawOutlineButton onClick={() => setHidePage(false)}>close</DrawOutlineButton>
                </div>
            </div>
        )
    }
    return (
        <div className="relative w-[70vw] h-[70vh] bg-black/70 flex flex-col justify-between items-center rounded-3xl pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md overflow-hidden">

            <div className="absolute top-10 left-10">
                <DrawOutlineButton onClick={() => setHidePage(true)}>view</DrawOutlineButton>
            </div>

            <p className='text-xs tracking-widest text-cyan-500/50'>
                Youkoso
            </p>

            {/* Intro */}
            <div className="relative w-full flex-col flex justify-center items-center my-4">
                <HackerShuffle 
                    text="unclePRO" 
                    duration={0.5} 
                    triggerOnHover={true}
                    className='hover:scale-150 duration-10000'
                />
                
                <div className='w-full max-w-2xl text-center z-10 px-4'>
                    <p className='text-sm md:text-base tracking-wide opacity-50 hover:opacity-100 hover:scale-102 duration-500 text-cyan-500 leading-relaxed'>
                        Yare Yare daze. The web needs better architecture.
                    </p>
                </div>
            </div>

            {/* Bottom Nav Links */}
            <div className='flex gap-6 z-10'>
                {links.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                       className="text-cyan-500/60 hover:text-cyan-400 hover:scale-110 drop-shadow-[0_0_5px_rgba(34,211,238,0)] hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all text-3xl">
                        <Icon />
                    </a>
                ))}
            </div>

            <div className="absolute bottom-30 flex flex-col items-center gap-1 text-white/30 animate-bounce cursor-default pointer-events-none">
                <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
                <FaAngleDoubleDown className="text-sm" />
            </div>
            
        </div>
    );
}