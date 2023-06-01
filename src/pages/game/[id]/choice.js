import { useRecoilState, useSetRecoilState } from "recoil";
import { captionState, hpState, posState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { choiceContents } from "@/contents/Content";

export default function Choice() {
    const router = useRouter();
    const { id } = router.query;

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
        setTimeout(() => {
            setShowCaption(true);
        }, 300);
        setShowHp(true);
    }, []);

    setCaption({
        title: choiceContents[id]?.capTitle,
        content: choiceContents[id]?.capContent,
    });

    const move = (i) => {
        setPos([dir[i][0], dir[i][1]]);

        let type;
        switch(i) {
            case 0:
                type = 'general';
                break;
            case 1:
                type = 'general';
                break;
            case 2:
                type = 'local';
                break;
        }

        if(hp <= 20) {
            setHp(0);
            setTimeout(() => {
                router.push(`/game/${id}/ending`);
            }, 1000);
        }   else {
            setHp(prev => prev-20);
            setTimeout(() => {
                // setObj({...obj, stage: stages.HOSPITAL});
                router.push(`/game/${id}/hospital?type=${type}`);
            }, 2000);
        }
       
    }

    return choiceContents && (
        <Layout>
            <div  className="h-[75vh] flex flex-col items-center justify-center">
                <div className="relative w-[700px] pb-[700px] border-secondary rounded-full border-2 mb-10 flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${choiceContents[id]?.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                    <div className="flex justify-center items-center absolute top-1/2 left-1/2 w-32 h-16 text-center -translate-x-16 -translate-y-8" id="patient"
                    style={{
                        backgroundImage: 'url(/amb.jpeg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    ></div>
                    <style jsx global>{`
                            #patient {
                                top: ${pos[0]}%;
                                left: ${pos[1]}%;
                                transition: all 1.5s;
                            }
                        `}</style>
                    <div     
                    onClick={() => {
                        move(0);
                    }}
                    className="absolute w-32 h-32 cursor-pointer"
                    style={{
                        backgroundImage: 'url(/hospital.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        top: `${dir[0][0]}%`,
                        left: `${dir[0][1]}%`,
                    }}
                    ></div>

                    <div     
                    onClick={() => {
                        move(1);
                    }}
                    className="absolute w-32 h-32 cursor-pointer"
                    style={{
                        backgroundImage: 'url(/hospital.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        top: `${dir[1][0]}%`,
                        left: `${dir[1][1]}%`,
                    }}
                    ></div>

                    <div 
                    onClick={() => {
                        move(2);
                    }}
                    className="absolute w-32 h-32 cursor-pointer"
                    style={{
                        backgroundImage: 'url(/hospital.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        top: `${dir[2][0]}%`,
                        left: `${dir[2][1]}%`,
                    }}
                    ></div>
                </div>    
            </div>
        </Layout>
    )
}   