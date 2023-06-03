import { useRecoilState, useSetRecoilState } from "recoil";
import { captionState, descriptionState, hpState, posState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";
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
    const [pos, setPos] = useRecoilState(posState);
    const [hp, setHp] = useRecoilState(hpState);

    const dir = [
        [15, 70],
        [65, 75],
        [45, 15]
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

    setDescription(choiceContents[id]?.description);

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
            <div  className="w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-[700px] pb-[700px] rounded-full flex flex-col justify-center items-cente bg-cover bg-center"
                style={{
                    backgroundImage: `url(${choiceContents[id]?.img})`,
                }}
                >
                    <Image src="/amb.jpeg" className="absolute top-1/2 left-1/2 -translate-x-[50px] -translate-y-[25px]" id="patient" width={100} height={50}  />
                    <style jsx global>{`
                            #patient {
                                top: ${pos[0]}%;
                                left: ${pos[1]}%;
                                transition: all 1.5s;
                            }
                        `}</style>

                    <Image 
                    onClick={() => { move(0) }}
                    src="/hospital.png" className="absolute cursor-pointer" width={40} height={40}
                    style={{
                        top: `${dir[0][0]}%`,
                        left: `${dir[0][1]}%`,
                    }}
                    />

                <Image 
                    onClick={() => { move(1) }}
                    src="/hospital.png" className="absolute cursor-pointer" width={40} height={40}
                    style={{
                        top: `${dir[1][0]}%`,
                        left: `${dir[1][1]}%`,
                    }}
                    />

                    <Image 
                    onClick={() => { move(2) }}
                    src="/hospital.png" className="absolute cursor-pointer" width={40} height={40}
                    style={{
                        top: `${dir[2][0]}%`,
                        left: `${dir[2][1]}%`,
                    }}
                    />
                </div>    
            </div>
        </Layout>
    )
}   