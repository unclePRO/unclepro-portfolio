import { GitHubCalendar } from "react-github-calendar";
import LeetCodeCalendar from "../ext/LeetCodeCalender";

export default function Page2() {

    return (
        <div className="relative w-[65vw] h-[65vh] bg-black/90 flex flex-col justify-between items-center rounded-3xl pointer-events-auto p-8 border border-cyan-500/20 backdrop-blur-md overflow-hidden">
            <div className="mt-10 pt-4">
                <GitHubCalendar 
                    username="unclepro" 
                    colorScheme="dark"
                    theme={{
                        dark: ['#14191f', '#0891b2', '#06b6d4', '#22d3ee', '#67e8f9']
                    }}
                    labels={{
                        totalCount: '{{count}} contributions made in the past year',
                    }}
                    className="text-white !overflow-visible"
                />
            </div>
            <div className="mt-10 pt-4 [&_article]:overflow-visible [&_svg]:overflow-visible">
                <LeetCodeCalendar username="unclepro" />
            </div>
        </div>
    )
}