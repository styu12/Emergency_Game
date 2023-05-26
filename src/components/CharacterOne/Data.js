import { useRecoilState, useSetRecoilState } from "recoil";
import Layout from "../Layout";
import { captionState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";

export default function Data({stages, setObj, obj}) {
    const [showHp, setShowHp] = useRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);

    useEffect(() => {
        setCaption({
            title: "현재 지역응급의료센터의 실정입니다.",
            content: `대한민국 지역응급의료센터는 총 ??개이며,
            평균 인력은 ??명, 평균 병상은 ??개 입니다.`,
        });
        setTimeout(() => {
            setShowCaption(true);
        }, 300);
    }, []);

    return (
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className=" w-full h-96 border-secondary rounded-lg border-2 mr-10">
                        <h1>데이터!!</h1>
                    </div>
                </div>

                <div>
                    <button 
                    className="button w-52 text-lg font-semibold"
                    onClick={() => {
                        setShowHp(true);
                        setObj({...obj, stage: stages.CHOICE});}}
                    >다른 병원 골라보자</button>
                </div>
            </div>
        </Layout>
    )
}   