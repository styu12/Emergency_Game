import { useEffect } from "react";
import Layout from "../Layout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { captionState, hpState, showCaptionState, showHpState } from "@/states";

export default function Emergency({stages, obj, setObj}) {
    const [showHp, setShowHp] = useRecoilState(showHpState);
    const [hp, setHp] = useRecoilState(hpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);

    useEffect(() => {
        setCaption({
            title: "🚨 응급상황이 발생했어요!!",
            content: `서울대학교 재학 중인 20대 초반 김모군은
            평상시처럼 수업듣던 중 머리에 통증을 느끼고 쓰러짐`,
        });
        setTimeout(() => {
            setShowCaption(true);
            setHp(50);
        }, 300);
        setShowHp(true);
    }, []);


    return (
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className=" w-full h-2/3  border-secondary rounded-lg border-2 mr-10">
                        <h1>쓰러진모습</h1>
                    </div>
                    {/* <p className=" w-60">서울대학교 재학 중인 20대 초반 김모군은 평상시처럼 수업듣던 중 머리에 통증을 느끼고 쓰러짐</p> */}
                </div>

                <div>
                    <button 
                    className="button w-52 text-lg font-semibold"
                    onClick={() => {
                        setObj({...obj, stage: stages.CHOICE});
                        setShowHp(false);
                    }}>환자를 살려주세요!!</button>
                </div>
            </div>
        </Layout>
    )
}