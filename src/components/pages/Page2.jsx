import { GitHubCalendar } from "react-github-calendar";
import LeetCodeCalendar from "../ext/LeetCodeCalender";

export default function Page2() {
    return (
        <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] h-[85vh] lg:h-[70vh] bg-black/80 flex flex-col justify-between rounded-3xl items-center pointer-events-auto p-6 md:p-8 border border-cyan-500/20 backdrop-blur-md overflow-y-auto lg:overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)] custom-scrollbar">
            
            {/* GitHub Header */}
            <a href="https://github.com/unclepro" target="_blank" rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-105 drop-shadow-[0_0_5px_rgba(34,211,238,0)] hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap tracking-wider">Github</h1>
            </a>
            
            {/* GitHub Calendar Container with horizontal scroll safety */}
            <div className="w-full max-w-full overflow-x-auto flex justify-center items-center py-1 [&_article]:!overflow-visible [&_article]:mx-auto [&_svg]:!overflow-visible [&_text]:!translate-y-[6px] custom-scrollbar">
                <GitHubCalendar 
                    username="unclepro" 
                    colorScheme="dark"
                    theme={{
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                    }}
                    labels={{
                        totalCount: '{{count}} contributions made in the past year',
                    }}
                    className="text-white"
                />
            </div>

            {/* LeetCode Header */}
            <a href="https://leetcode.com/u/unclepro" target="_blank" rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-105 drop-shadow-[0_0_5px_rgba(34,211,238,0)] hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap tracking-wider">Leetcode</h1>
            </a>

            {/* LeetCode Calendar Container with horizontal scroll safety */}
            <div className="w-full max-w-full overflow-x-auto flex justify-center items-center py-1 [&_article]:!overflow-visible [&_article]:mx-auto [&_svg]:!overflow-visible [&_text]:!translate-y-[6px] custom-scrollbar">
                <LeetCodeCalendar username="unclepro" />
            </div>

        </div>
    );
}
