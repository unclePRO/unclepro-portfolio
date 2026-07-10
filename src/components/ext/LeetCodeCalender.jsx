import { useEffect, useState } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

// 1. Helper function to generate an empty 365-day grid
const generateEmptyCalendar = () => {
    const calendarData = [];
    const today = new Date();
    for (let i = 365; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        calendarData.push({ 
            date: d.toISOString().split('T')[0], 
            count: 0, 
            level: 0 
        });
    }
    return calendarData;
};

export default function LeetCodeCalendar({ username }) {
    // Initialize with the empty calendar immediately so it always has a structure to render
    const [data, setData] = useState(generateEmptyCalendar());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false); // Track API failures

    useEffect(() => {
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`)
            .then(res => {
                if (!res.ok) throw new Error("API Offline");
                return res.json();
            })
            .then(apiData => {
                if (!apiData.submissionCalendar) throw new Error("No submission data");
                
                const submissions = JSON.parse(apiData.submissionCalendar);
                const populatedCalendar = generateEmptyCalendar();

                Object.keys(submissions).forEach(timestamp => {
                    const d = new Date(timestamp * 1000);
                    const dateStr = d.toISOString().split('T')[0];
                    
                    const dayObj = populatedCalendar.find(item => item.date === dateStr);
                    if (dayObj) {
                        const count = submissions[timestamp];
                        dayObj.count = count;
                        
                        if (count > 0) dayObj.level = 1;
                        if (count > 2) dayObj.level = 2;
                        if (count > 4) dayObj.level = 3;
                        if (count > 6) dayObj.level = 4;
                    }
                });
                
                setData(populatedCalendar);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch LeetCode data", err);
                // On failure: set error to true, but leave 'data' as the empty calendar!
                setError(true);
                setLoading(false);
            });
    }, [username]);

    if (loading) return <p className="text-cyan-400 animate-pulse font-mono tracking-widest text-sm">Decrypting LeetCode Data...</p>;

    // 2. Dynamically change the label text based on the error state
    const labelText = error 
        ? "LeetCode fetch failed or API down." 
        : '{{count}} submissions made in the past year';

    return (
        <div className="w-full pt-4 [&_svg]:overflow-visible [&_text]:translate-y-[4px] [&_text]:text-[14px]">
            <ActivityCalendar 
                data={data} 
                colorScheme="dark"
                theme={{
                    dark: ['#161b22', '#4d3d00', '#806600', '#b38f00', '#e6b800']
                }}
                labels={{
                    totalCount: labelText,
                }}
                className={error ? "text-red-400" : "text-white/90"}
            />
        </div>
    );
}