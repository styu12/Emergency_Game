import { useRecoilState, useSetRecoilState } from "recoil";
import { captionState, choiceCountState, descriptionState, hpState, posState, showCaptionState, showHpState } from "@/states";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { choiceContents } from "@/contents/Content";
import Image from "next/image";

export default function Choice() {
    const router = useRouter();
    const { id } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const setDescription = useSetRecoilState(descriptionState);
    const setChoiceCount = useSetRecoilState(choiceCountState);
    const [pos, setPos] = useRecoilState(posState);
    const [hp, setHp] = useRecoilState(hpState);

    const [isHover, setIsHover] = useState([false, false, false]);

    useEffect(() => {
        // setTimeout(() => {
        //     setShowCaption(true);
        // }, 300);
        setShowHp(true);
    }, []);

    setCaption({
        title: choiceContents[id]?.capTitle,
        content: choiceContents[id]?.capContent,
    });

    setDescription(choiceContents[id]?.description);

    const move = (i) => {
        setPos([choiceContents[id]?.dir[i][0], choiceContents[id]?.dir[i][1]]);

        const type = choiceContents[id]?.hospital[i].type;

        if(hp <= 20) {
            setHp(0);
            setTimeout(() => {
                router.push(`/game/${id}/ending`);
            }, 1000);
        }   else {
            setHp(prev => prev-10);
            setChoiceCount(prev => prev+1);
            setTimeout(() => {
                router.push(`/game/${id}/hospital?type=${type}`);
            }, 2000);
        }
       
    }

    return choiceContents && (
        <Layout>
            <div  className="w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-[700px] pb-[700px] rounded-full flex flex-col justify-center items-cente bg-cover bg-center"
                style={{
                    backgroundImage: `url(${choiceContents[id]?.img})`,
                }}
                >
                    <Image src="/amb.png" className="absolute top-1/2 left-1/2 -translate-x-[50px] -translate-y-[25px]" id="patient" width={100} height={50}  />
                    <style jsx global>{`
                            #patient {
                                top: ${pos[0]}%;
                                left: ${pos[1]}%;
                                transition: all 1.5s;
                            }
                        `}</style>

                    {choiceContents[id]?.dir.map((d, i) => (
                        <div
                        onMouseOver={() => { setIsHover(prev => prev.map((v, idx) => idx === i ? true : false)) }} 
                        onMouseOut={() => { setIsHover(prev => prev.map(() => false)) }}
                        style={{
                            position: 'absolute',
                            top: `${d[0]}%`,
                            left: `${d[1]}%`,
                        }}>
                            {choiceContents[id]?.hospital[i].type === 'general' ? (
                                <Image 
                                onClick={() => { move(i) }}
                                src="/clinic_big.png" className="cursor-pointer hover:scale-125 transition-transform" width={96} height={96}
                                />
                            ) : (
                                <Image 
                                onClick={() => { move(i) }}
                                src="/clinic.png" className="cursor-pointer hover:scale-125 transition-transform" width={64} height={64}
                                />
                            )}
                            

                            {isHover[i]  && (
                            <div className=" p-4 bg-white rounded-2xl absolute w-80 shadow-2xl">
                                    <h3 className=" font-bold text-lg">{choiceContents[id]?.hospital[i].title}</h3>
                                    <p>
                                        {choiceContents[id]?.hospital[i].desc}
                                    </p>
                            </div>
                            )}

                        </div>
                    ))}

                </div>    
            </div>
        </Layout>
    )
}   