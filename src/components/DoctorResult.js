import { useEffect, useState } from "react";

export default function DoctorResult() {
    const [isZoomOut, setIsZoomOut] = useState(false);
    const count = 25;
    const cnt = 10000;

    useEffect(() => {
        setTimeout(() => {
            setIsZoomOut(true);
        }, 1500);
    }, []);

    return (
     <>
        <div className="w-full flex flex-wrap justify-between items-center relative">
            <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-[2px] justify-between items-center">
                {Array.from({length: cnt}).map((_, i) => (
                    <div key={i} className={`w-[5px] h-[5px] rounded-[50%] bg-black ${isZoomOut ? "scale-[1]" : "scale-[0]"}`}>
                    </div>
                ))}
            </div>
            {Array.from({length: count}).map((_, i) => (
                <div key={i} className={`w-48 h-48 rounded-[50%] bg-black transform transition-all ease-in-out duration-[4000] ${isZoomOut ? "scale-[0]" : "scale-[1]"}`}>
                </div>
            ))}
       </div>
     </> 
    )
}