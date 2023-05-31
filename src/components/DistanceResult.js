

export default function DistanceResult() {

    const dir = [[50, 0], [50, 100], [40, 1]];
    const pos = [50, 50];
    return (
                <div className="relative w-3/4 pb-[75%] border-secondary rounded-[50%] border-2 mb-10 flex flex-col justify-center items-center">
                    <span className="absolute flex justify-center items-center top-1/2 left-1/2 w-32 h-16 text-center -translate-x-16 -translate-y-8" id="patient">🏥 병원</span>
                    <style jsx global>{`
                            #patient {
                                top: ${pos[0]}%;
                                left: ${pos[1]}%;
                                transition: all 1.5s;
                            }
                        `}</style>

                    <div className="absolute top-[50%] left-[50%] w-1/2 h-6 origin-left -translate-y-3 bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>

                    <div className="absolute top-[50%] left-[50%] w-1/3 h-6 origin-left -translate-y-3 rotate-[45deg] bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>

                    <div className="absolute top-[50%] left-[50%] w-1/2 h-6 origin-left -translate-y-3 rotate-[90deg] bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>

                    <div className="absolute top-[50%] left-[50%] w-1/4 h-6 origin-left -translate-y-3 rotate-[135deg] bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>

                    <div className="absolute top-[50%] left-[50%] w-1/5 h-6 origin-left -translate-y-3 rotate-[180deg] bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>

                    <div className="absolute top-[50%] left-[50%] w-1/2 h-6 origin-left -translate-y-3 rotate-[225deg] bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>

                    <div className="absolute top-[50%] left-[50%] w-1/3 h-6 origin-left -translate-y-3 rotate-[270deg] bg-gradient-to-r from-transparent to-green-300 rounded-[0.75rem]">
                            <div className="absolute right-0 top-0 w-6 h-6 rounded-[50%] bg-green-500" />
                    </div>
                    {/* <div className="w-12 h-6 -translate-x-6 -translate-y-6 rounded-[50%] bg-black absolute" id="hospital_1" />
                    <style jsx global>{`
                            #hospital_1 {
                                top: ${dir[0][0]}%;
                                left: ${dir[0][1]}%;
                            }
                        `}</style> */}
                </div>    
    )
}