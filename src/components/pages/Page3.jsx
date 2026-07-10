import { 
    SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, 
    SiNodedotjs, SiJavascript, SiGnubash, SiC, SiThreedotjs, 
    SiDiscord, SiMongodb, SiLinux 
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt, FaImage } from "react-icons/fa";

// Quick array to map over skills cleanly
const skills = [
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "C", icon: SiC, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Three.js", icon: SiThreedotjs, color: "text-white" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Discord.js", icon: SiDiscord, color: "text-indigo-400" },
    { name: "Bash", icon: SiGnubash, color: "text-white" },
    { name: "Linux / Ricing", icon: SiLinux, color: "text-yellow-200" },
];

export default function Page3() {
    return (
        <div className="relative w-[70vw] h-[70vh] bg-black/80 flex flex-col items-center pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md rounded overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            
            <h1 className="text-3xl text-white tracking-widest uppercase mb-6 text-center">
                My skills
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 w-full h-[calc(100%-4rem)]">
                
                {/* LEFT: Skills*/}
                <div className="lg:w-1/2 h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 overflow-y-auto">
                    <h2 className="text-white/60 font-mono uppercase tracking-widest text-sm mb-4 border-b border-white/10 pb-2">Languages and frameworks</h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 scrollbar-thumb-black scrollbar-track-gray-200">
                        {skills.map((skill) => (
                            <div 
                                key={skill.name} 
                                className="flex flex-col items-center justify-center p-3 bg-black/40 border border-white/5 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all cursor-default group"
                            >
                                <skill.icon className={`text-3xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity ${skill.color}`} />
                                <span className="font-mono text-xs tracking-wider text-white/70 group-hover:text-cyan-300">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Projects*/}
                <div className="lg:w-1/2 h-full flex flex-col gap-6">
                    
                    {/* Potify */}
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all relative overflow-hidden">                        
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl text-white font-bold tracking-wider">Potify</h2>
                                <div className="flex gap-3">
                                    <a href="https://github.com/unclepro/potify" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors text-xl">
                                        <FaGithub />
                                    </a>
                                    <a href="https://potify.unclepro.site" target="_blank" rel="noreferrer" className="text-cyan-500/60 hover:text-cyan-400 transition-colors text-xl">
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-white/60 font-mono leading-relaxed max-w-[90%]">
                                [WIP] A full-stack music streaming platform designed for seamless audio playback. Tried to make it without any vibecoding.
                            </p>
                        </div>
                    </div>

                    {/* Hyprland Rice */}
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl text-white font-bold tracking-wider">Glassy Cyberpunk Rice</h2>
                                <a href="https://github.com/unclepro/fedora-hyprland-rice" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors text-xl">
                                    <FaGithub />
                                </a>
                            </div>
                            <p className="text-sm text-white/60 font-mono leading-relaxed mb-4">
                                Custom Fedora 43 desktop environment configuration utilizing Hyprland and Waybar. Focuses on minimal, glassy aesthetics.
                            </p>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
            
        </div> 
    )
}