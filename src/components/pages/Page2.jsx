import { GitHubCalendar } from "react-github-calendar";
import LeetCodeCalendar from "../ext/LeetCodeCalender";

export default function Page2() {

    return (
        <div className="relative w-[70vw] h-[70vh] bg-black/80 flex flex-col justify-between rounded items-center pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md overflow-hidden">
            <h1 className="text-4xl font-bold text-white whitespace-nowrap">Github</h1>
            <div className="[&_article]:!overflow-visible [&_svg]:!overflow-visible [&_text]:!translate-y-[6px]">
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
            <h1 className="text-4xl font-bold text-white whitespace-nowrap">Leetcode</h1>
            <div className="[&_article]:overflow-visible [&_svg]:overflow-visible [&_text]:!translate-y-[6px]">
                <LeetCodeCalendar username="unclepro" />
            </div>
        </div>
    )
}