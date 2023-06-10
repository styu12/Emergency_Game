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
 }),
 bg_move: i => ({
        transition: { duration: 5 * (dist[i]/25+1), ease: "linear" },
        width: [`0%`, `${100 - dist[i]}%`], 
 })
 }

const changeBackground = (i) => {
        if([1, 2, 3, 4, 5, 6].includes(i)) {
                setBackgroundImage(backgroundImage.map((b, index) => {
                        if(index == i) return "no-repeat center/100% url('/amb_black.png')";
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
                        animate={{ width: ['0%', '100%'], backgroundColor: ['#16a085', '#d63031'] }}
                        transition={{
                        ease: "linear",
                        duration: 5 * (dist[4]/25+1),
                        }}
                        />
                </motion.div>

                <div className="flex flex-col w-full pt-10">
                        {dist.map((_, i) => (
                                <div className="relative w-full h-12 mt-4" key={i}>
                                        <Image src="/clinic.png" className="absolute top-0 right-0 -translate-x-[20px] -translate-y-[20px]" width={64} height={64} />
                                        <motion.div className={`absolute w-16 h-16 rounded-[50%] top-0 transition-all scale-x-[-1]`}
                                        style={{        
                                                background: backgroundImage[i],
                                        }}
                                        custom={i}
                                        animate="move"
                                        variants={variants}
                                        onAnimationComplete={() => changeBackground(i)}
                                        >
                                        </motion.div>

                                        {/* <motion.div
                                        className={`h-1/2 rounded-2xl absolute top-0 left-0 hp`}
                                        custom={i}
                                        animate="bg_move"
                                        variants={variants}
                                        style= {{
                                                background: "linear-gradient(to right, rgba(85, 239, 196,0.4), rgba(129, 236, 236,0.4))",
                                                translateX: "-20px",
                                        }}
                                        /> */}


                                                
                                </div>
                        ))}
                </div>
        </>
)
}