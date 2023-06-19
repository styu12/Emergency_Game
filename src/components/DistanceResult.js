import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function DistanceResult({setType}) {
const [show, setShow] = useState(false);
const [backgroundImage, setBackgroundImage] = useState(Array.from({length: 8}, () => "no-repeat center/100% url('/amb.png')"));
const [backgroundColor, setBackgroundColor] = useState(Array.from({length: 8}, () => "linear-gradient(to right, rgba(85, 239, 196,0.4), rgba(129, 236, 236,0.4))"));

useEffect(() => {
       setTimeout(() => {
        setShow(true);
        }, 5500);

        setTimeout(() => {
                setBackgroundImage(backgroundImage.map((b, index) => {
                        if([1, 2, 3, 4, 5, 6].includes(index)) return "no-repeat center/100% url('/amb_black.png')";
                        else return b;
                }));
                setBackgroundColor(backgroundColor.map((b, index) => {
                        if([1, 2, 3, 4, 5, 6].includes(index)) return "rgba(99, 110, 114,0.5)";
                        else return b;
                }));
        }, 5000);
}, []);

const dist = [0, 15, 20, 35, 50, 25, 10, 0]
const towns = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기']

const variants = {
move: i => ({ 
        // transition: { duration: 5 * (dist[i]/25+1), ease: "linear" },
        transition: { duration: 5, ease: "linear" },
        right: [`100%`, `${dist[i]}%`], 
 }),
 bg_move: i => ({
        // transition: { duration: 5 * (dist[i]/25+1), ease: "linear" },
        transition: { duration: 5, ease: "linear" },
        width: [`0vw`, `${100 - dist[i]}vw`], 
 })
 }

// const changeBackgroundImage = (i) => {
//         if([1, 2, 3, 4, 5, 6].includes(i)) {
//                 setBackgroundImage(backgroundImage.map((b, index) => {
//                         if(index == i) return "no-repeat center/100% url('/amb_black.png')";
//                         else return b;
//                 }));
//         }       else return;
// }

// const changeBackgroundColor = (i) => {
//         if([1, 2, 3, 4, 5, 6].includes(i)) {
//                 setBackgroundColor(backgroundColor.map((b, index) => {
//                         if(index == i) return "rgba(99, 110, 114,0.5)";
//                         else return b;
//                 }));
//         }       else return;
// }


return (
        <>
                <div className="flex items-center mb-10">
                        <button className="mr-5 button" onClick={() => setType("")}>Before</button>
                        <h2 className='text-4xl font-bold text-primary'>우리 지역에서는 골든타임 안에 응급실에 도착할 수 있을까?</h2>
                </div>

                <motion.div 
                className="w-[95%] h-6 border-2 rounded-2xl relative m-auto"
                animate={{ borderColor: [ 'rgba(116, 185, 255,0.5)', 'rgba(214, 48, 49,0.5)'] }}
                transition={{
                ease: "linear",
                // duration: 5 * (dist[4]/25+1)
                duration: 5
                }}
                >
                        <span className="absolute top-0 left-0 w-[100px] -translate-x-[50px] -translate-y-[5px] bg-primary text-white py-1 z-10 text-center rounded-xl font-bold">Time</span>
                        <span className="absolute top-0 left-[50%] w-[100px] -translate-x-[50px] -translate-y-[5px] bg-primary text-white py-1 z-10 text-center rounded-xl font-bold">15분 경과</span>
                        <span className="absolute top-0 left-[100%] w-[100px] -translate-x-[50px] -translate-y-[5px] bg-primary text-white py-1 z-10 text-center rounded-xl font-bold">30분 경과</span>
                        <motion.div
                        className={`h-full rounded-2xl absolute top-0 left-0 hp`}
                        animate={{ width: ['0%', '100%'], backgroundColor: ['rgba(116, 185, 255,0.5)', 'rgba(214, 48, 49,0.5)'] }}
                        transition={{
                        ease: "linear",
                        // duration: 5 * (dist[4]/25+1),
                        duration: 5,
                        }}
                        />
                </motion.div>

                <div className="flex flex-col w-full pt-10">
                        {dist.map((_, i) => (
                                <div className="relative w-full h-12 mt-4" key={i}>
                                        <span className="absolute top-4 left-0 font-bold">{towns[i]}</span>
                                        <Image src="/clinic.png" className="absolute top-0 right-0 -translate-x-[20px] -translate-y-[20px]" width={64} height={64} />
                                        <motion.div className={`absolute w-16 h-16 rounded-[50%] top-0 transition-all scale-x-[-1]`}
                                        style={{        
                                                background: backgroundImage[i],
                                        }}
                                        custom={i}
                                        animate="move"
                                        variants={variants}
                                        // onAnimationComplete={() => changeBackgroundImage(i)}
                                        >
                                        <motion.div
                                                className={`h-[10px] rounded-2xl absolute bottom-[15px] left-[20px] hp`}
                                                custom={i}
                                                animate="bg_move"
                                                variants={variants}
                                                style= {{
                                                        background: backgroundColor[i],
                                                }}
                                                // onAnimationComplete={() => changeBackgroundColor(i)}
                                                />

                                        </motion.div>


                                                
                                </div>
                        ))}
                </div>

                {show && (
                        <div 
                        className="fixed top-[50%] left-[50%] w-[90vw] transform -translate-x-[45vw] h-[600px] -translate-y-[300px] bg-gray-200 p-6 text-primary font-bold rounded-2xl flex justify-center items-center shadow-lg">
                                <h3 className=" text-2xl" style={{ lineHeight : '1.5'}}>
                                본 자료는 2019년 지역별 DOA 환자 응급실 도착시간을 나타낸 자료입니다. <br />
                                2020년에 DOA 환자가 <strong className=" text-red-500">30분</strong> 이내에 응급실에 도착한 지역은 <strong className=" text-red-500">없었습니다.</strong>
                                </h3>
                                <button className="text-3xl absolute top-8 right-8 cursor-pointer font-bold"
                                onClick={() => setShow(false)}>
                                        X
                                </button>
                        </div>
                )}
        </>
)
}