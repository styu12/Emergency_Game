import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


export default function DistanceResult({setType}) {
const [backgroundImage, setBackgroundImage] = useState(Array.from({length: 8}, () => "no-repeat center/100% url('/amb.png')"));

const dist = [0, 15, 20, 35, 50, 25, 10, 0]

const variants = {
move: i => ({ 
        transition: { duration: 5 * (dist[i]/25+1), ease: "linear" },
        right: [`100%`, `${dist[i]}%`], 
 })
}

const changeBackground = (i) => {
        if([1, 2, 3, 4, 5, 6].includes(i)) {
                setBackgroundImage(backgroundImage.map((b, index) => {
                        if(index == i) return "no-repeat center/100% url('/student.png')";
                        else return b;
                }));
        }       else return;
}


return (
        <>
                <div className="flex items-center mb-10">
                        <button className="mr-5 button" onClick={() => setType("")}>Before</button>
                        <h2 className='text-4xl font-bold text-primary'>병원까지 이동 시간 : 1.5시간(수도권) vs 3시간(지방)</h2>
                </div>

                <motion.div 
                className="w-full h-6 border-2 rounded-2xl relative"
                animate={{ borderColor: [ '#16a085', '#d63031'] }}
                transition={{
                ease: "linear",
                duration: 5 * (dist[4]/25+1)
                }}
                >
                        <motion.div
                        className={`h-full rounded-2xl absolute top-0 left-0 hp`}
                        animate={{ width: ['100%', '0%'], backgroundColor: ['#16a085', '#d63031'] }}
                        transition={{
                        ease: "linear",
                        duration: 5 * (dist[4]/25+1),
                        }}
                        />
                </motion.div>

                <div className="flex flex-col w-full pt-10">
                        {dist.map((_, i) => (
                                <div className="relative w-full h-12 mt-4" key={i}>
                                        <Image src="/clinic.png" className="absolute top-0 right-0 -translate-x-[20px] -translate-y-[20px]" width={40} height={40} />
                                        <motion.div className={`absolute w-12 h-12 rounded-[50%] top-0 transition-all scale-x-[-1]`}
                                        style={{        
                                                background: backgroundImage[i],
                                        }}
                                        custom={i}
                                        animate="move"
                                        variants={variants}
                                        onAnimationComplete={() => changeBackground(i)}
                                        />
                                </div>
                        ))}
                </div>
        </>
)
}