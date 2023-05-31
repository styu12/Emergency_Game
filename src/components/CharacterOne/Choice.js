import { useRecoilState, useSetRecoilState } from "recoil";
import Layout from "../Layout";
import { captionState, hpState, posState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";

export default function Choice({obj, setObj, stages}) {
    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const [pos, setPos] = useRecoilState(posState);
    const [hp, setHp] = useRecoilState(hpState);

    const dir = [
        [15, 70],
        [65, 75],
        [25, 15]
    ]

    useEffect(() => {
        setCaption({
            title: "🚑 환자의 생명이 위급해요! 응급실을 골라주세요!! 🚑",
            content: `현재 위치 근처에 3개의 응급실이 있어요.
            환자를 살리기 위해 응급실을 골라주세요!
            환자의 생존률은 응급실까지의 거리, 응급실의 대기인원, 응급실의 수술실 여유 등에 영향을 받아요.`,
        });
        setTimeout(() => {
            setShowCaption(true);
        }, 300);
        setShowHp(true);
    }, []);

    const move = (i) => {
        setPos([dir[i][0], dir[i][1]]);

        if(hp <= 20) {
            setHp(0);
            setTimeout(() => {
                window.location.href = "/ending/fail";
            }, 1000);
        }   else {
            setHp(prev => prev-20);
            setTimeout(() => {
                setObj({...obj, stage: stages.HOSPITAL});
            }, 2000);
        }
       
    }

    return (
        <Layout>
            <div  className="h-[75vh] flex flex-col items-center justify-center">
                <div className="relative w-2/5 pb-[40%] border-secondary rounded-full border-2 mb-10 flex flex-col justify-center items-center">
                    <span className="flex justify-center items-center absolute top-1/2 left-1/2 w-32 h-16 text-center -translate-x-16 -translate-y-8" id="patient">🚑 환자 🚑</span>
                    <style jsx global>{`
                            #patient {
                                top: ${pos[0]}%;
                                left: ${pos[1]}%;
                                transition: all 1.5s;
                            }
                        `}</style>
                    <button     
                    onClick={() => {
                        move(0);
                    }}
                    className="button absolute" id="hospital_1">서울대병원</button>
                    <style jsx global>{`
                            #hospital_1 {
                                top: ${dir[0][0]}%;
                                left: ${dir[0][1]}%;
                            }
                        `}</style>

                    <button     
                    onClick={() => {
                        move(1);
                    }}
                    className="button absolute" id="hospital_2">아산병원</button>
                    <style jsx global>{`
                            #hospital_2 {
                                top: ${dir[1][0]}%;
                                left: ${dir[1][1]}%;
                            }
                        `}</style>

                    <button 
                    onClick={() => {
                        move(2);
                    }}
                    className="button absolute" id="hospital_3">경희대병원</button>
                    <style jsx global>{`
                            #hospital_3 {
                                top: ${dir[2][0]}%;
                                left: ${dir[2][1]}%;
                            }
                        `}</style>
                </div>    
            </div>
        </Layout>
    )
}   