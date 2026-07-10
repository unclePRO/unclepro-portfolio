import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HackerShuffle from '../ext/HackerShuffle';
const links = [
    { icon: FaGithub, href: "https://github.com/unclepro", label: "Github" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/unclepro", label: "LeetCode" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/aviralpan", label: "LinkedIn" },
];

export default function Page1() {
    return (
        <div className="relative w-[65vw] h-[65vh] bg-black/90 flex flex-col justify-between items-center rounded-3xl pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md overflow-hidden">

            <p className='font-mono text-xs tracking-widest text-cyan-500/50 uppercase z-10'>
                hi
            </p>

            {/* Intro */}
            <div className="relative w-full flex-1 flex justify-center items-center my-4">
                <HackerShuffle 
                    text="unclePRO" 
                    duration={0.5} 
                    triggerOnHover={true}
                />
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
            
        </div>
    );
}