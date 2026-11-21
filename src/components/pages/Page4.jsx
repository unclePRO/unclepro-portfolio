import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaDiscord, FaCheck, FaGithub, FaExternalLinkAlt, FaCube } from "react-icons/fa";
import { SiKofi, SiThreedotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Page4() {
    const [discordCopied, setDiscordCopied] = useState(false);

    const handleCopyDiscord = () => {
        navigator.clipboard.writeText("unclepro");
        setDiscordCopied(true);
        setTimeout(() => setDiscordCopied(false), 2000);
    };

    const techPills = [
        { name: "Three.js", icon: SiThreedotjs, color: "text-white" },
        { name: "R3F", icon: FaCube, color: "text-cyan-400" },
        { name: "React 19", icon: SiReact, color: "text-cyan-400" },
        { name: "Tailwind v4", icon: SiTailwindcss, color: "text-cyan-300" },
    ];

    return (
        <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] h-[85vh] lg:h-[70vh] bg-black/80 flex flex-col items-center pointer-events-auto p-6 md:p-8 border border-cyan-500/20 backdrop-blur-md rounded-3xl overflow-y-auto lg:overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)] custom-scrollbar">

            <h1 className="text-3xl text-white tracking-widest uppercase mb-4 md:mb-6 text-center shrink-0">
                Contact &amp; Site Details
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 w-full h-auto lg:h-[calc(100%-4rem)] min-h-0">
                
                {/* LEFT: Contact Channels */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 overflow-y-auto custom-scrollbar">
                    <h2 className="text-white/60 font-mono uppercase tracking-widest text-sm mb-4 border-b border-white/10 pb-2">
                        Get In Touch
                    </h2>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                        
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/aviralpan" target="_blank" rel="noreferrer" 
                           className="group flex flex-col items-center justify-center p-5 bg-black/50 border border-white/10 rounded-xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm min-h-[110px]">
                            <FaLinkedin className="text-3xl md:text-4xl text-white/60 group-hover:text-cyan-400 transition-colors mb-2" />
                            <span className="text-white/80 tracking-widest text-xs md:text-sm">LinkedIn</span>
                        </a>

                        {/* Email */}
                        <a href="mailto:mail@unclepro.site" 
                           className="group flex flex-col items-center justify-center p-5 bg-black/50 border border-white/10 rounded-xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm min-h-[110px]">
                            <FaEnvelope className="text-3xl md:text-4xl text-white/60 group-hover:text-cyan-400 transition-colors mb-2" />
                            <span className="text-white/80 tracking-widest text-xs md:text-sm truncate max-w-full">Email</span>
                        </a>

                        {/* Discord */}
                        <button onClick={handleCopyDiscord} 
                           className="group cursor-pointer flex flex-col items-center justify-center p-5 bg-black/50 border border-white/10 rounded-xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm min-h-[110px]">
                            {discordCopied ? (
                                <FaCheck className="text-3xl md:text-4xl text-green-400 mb-2 animate-bounce" />
                            ) : (
                                <FaDiscord className="text-3xl md:text-4xl text-white/60 group-hover:text-cyan-400 transition-colors mb-2" />
                            )}
                            <span className="text-white/80 tracking-widest text-xs md:text-sm">
                                {discordCopied ? "Copied: unclepro" : "Discord"}
                            </span>
                        </button>

                        {/* Ko-fi */}
                        <a href="https://ko-fi.com/unclepro" target="_blank" rel="noreferrer"
                           className="group flex flex-col items-center justify-center p-5 bg-black/50 border border-white/10 rounded-xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm min-h-[110px]">
                            <SiKofi className="text-3xl md:text-4xl text-white/60 group-hover:text-cyan-400 transition-colors mb-2" />
                            <span className="text-white/80 tracking-widest text-xs md:text-sm">Ko-Fi</span>
                        </a>

                    </div>
                </div>

                {/* RIGHT: About This Site (Three.js & Architecture) */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 overflow-y-auto custom-scrollbar group hover:border-cyan-500/30 transition-all">
                    
                    <div>
                        <h2 className="text-white/60 font-mono uppercase tracking-widest text-sm mb-4 border-b border-white/10 pb-2">
                            How This Site Was Built
                        </h2>

                        <p className="text-sm text-white/70 font-mono leading-relaxed mb-4">
                            Designed with a retro-cyberpunk aesthetic combining real-time 3D rendering with reactive Web UI:
                        </p>

                        <ul className="text-xs md:text-sm text-white/60 font-mono space-y-2 mb-4 list-disc list-inside">
                            <li>
                                <span className="text-cyan-300 font-semibold">3D Flight Path:</span> Catmull-Rom spline camera trajectory damped through smooth scroll coordinates.
                            </li>
                            <li>
                                <span className="text-cyan-300 font-semibold">Atmosphere &amp; Shaders:</span> Custom dynamic ocean normal mapping with volumetric sky and cloud synthesis.
                            </li>
                            <li>
                                <span className="text-cyan-300 font-semibold">3D DOM Projection:</span> Drei <code className="text-white/80">&lt;Html transform&gt;</code> projecting responsive terminal panels into 3D world space.
                            </li>
                            <li>
                                <span className="text-cyan-300 font-semibold">Styling &amp; Post-FX:</span> Tailwind CSS v4, VT323 typography, and post-processing bloom.
                            </li>
                        </ul>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {techPills.map(({ name, icon: Icon, color }) => (
                                <span key={name} className="flex items-center gap-1.5 px-2.5 py-1 bg-black/40 border border-white/10 rounded-lg text-xs font-mono text-white/80">
                                    <Icon className={color} /> {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* GitHub Repository Link */}
                    <a 
                        href="https://github.com/unclepro/unclepro-portfolio" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-between p-3.5 bg-black/60 border border-cyan-500/30 rounded-xl hover:bg-cyan-950/40 hover:border-cyan-400 transition-all group/repo shadow-[0_0_15px_rgba(34,211,238,0.1)] mt-2"
                    >
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-2xl text-cyan-400 group-hover/repo:scale-110 transition-transform" />
                            <div className="text-left">
                                <div className="text-white font-mono text-sm tracking-wider group-hover/repo:text-cyan-300 font-bold">
                                    unclepro/unclepro-portfolio
                                </div>
                                <div className="text-white/50 font-mono text-xs">
                                    View open-source repository on GitHub
                                </div>
                            </div>
                        </div>
                        <FaExternalLinkAlt className="text-cyan-500/60 group-hover/repo:text-cyan-300 transition-colors text-sm" />
                    </a>

                </div>

            </div>

        </div>
    );
}
