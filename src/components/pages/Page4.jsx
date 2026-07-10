import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaDiscord, FaCheck } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

export default function Page4() {
    const [discordCopied, setDiscordCopied] = useState(false);

    const handleCopyDiscord = () => {
        navigator.clipboard.writeText("unclepro");
        setDiscordCopied(true);
        setTimeout(() => setDiscordCopied(false), 2000);
    };

    return (
        <div className="relative w-[70vw] h-[70vh] bg-black/80 flex flex-col items-center justify-center pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md rounded overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">

            <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
                
                <h1 className="text-3xl text-white tracking-widest uppercase mb-12">
                    Contact me!
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    
                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/aviralpan" target="_blank" rel="noreferrer" 
                       className="group flex flex-col items-center justify-center p-8 bg-black/50 border border-white/10 rounded-2xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
                        <FaLinkedin className="text-5xl text-white/60 group-hover:text-cyan-400 transition-colors mb-4" />
                        <span className="text-white/80 tracking-widest">LinkedIn</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:mail@unclepro.site" 
                       className="group flex flex-col items-center justify-center p-8 bg-black/50 border border-white/10 rounded-2xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
                        <FaEnvelope className="text-5xl text-white/60 group-hover:text-cyan-400 transition-colors mb-4" />
                        <span className="text-white/80 tracking-widest">mail@unclepro.site</span>
                    </a>

                    {/* Discord */}
                    <button onClick={handleCopyDiscord} 
                       className="group cursor-pointer flex flex-col items-center justify-center p-8 bg-black/50 border border-white/10 rounded-2xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm relative">
                        {discordCopied ? (
                            <FaCheck className="text-5xl text-green-400 mb-4 animate-bounce" />
                        ) : (
                            <FaDiscord className="text-5xl text-white/60 group-hover:text-cyan-400 transition-colors mb-4" />
                        )}
                        <span className="text-white/80 tracking-widest">
                            {discordCopied ? "ID Copied!" : "Discord"}
                        </span>
                    </button>

                    {/* Ko-fi */}
                    <a href="https://ko-fi.com/unclepro" target="_blank" rel="noreferrer"
                       className="group flex flex-col items-center justify-center p-8 bg-black/50 border border-white/10 rounded-2xl hover:bg-cyan-950/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
                        <SiKofi className="text-5xl text-white/60 group-hover:text-cyan-400 transition-colors mb-4" />
                        <span className="text-white/80 tracking-widest">Ko-Fi</span>
                    </a>

                </div>
            </div>

        </div>
    );
}