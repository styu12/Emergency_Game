import { captionState, showCaptionState, showHpState } from "@/states";
import Layout from "../Layout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";

export default function Hospital({stages, obj, setObj}) {
    const [showHp, setShowHp] = useRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    
    useEffect(() => {
        setTimeout(() => {
            setCaption({
                title: "간호사) '관련 인력이 없어요 저희한테는,,, ㅠㅠ'",
                content: `해당 응급실은 지역응급의료센터입니다.
                병원 내 인력이 현저히 부족하고, 인프라가 미흡한 실정입니다.
                지금 환자 수술을 진행할 수 있는 인력이 없어요.`,
            });
            setShowCaption(true);
        }, 300);
    }, []);

    return obj.isMajor ? (
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className=" w-full h-96 border-secondary rounded-lg border-2 mr-10">
                        <h1>권역응급센터</h1>
                    </div>
                    {/* <p className=" w-60">병상이 다 차소 입원 불가해요ㅠㅠ</p> */}
                </div>

                <div>
                    <button 
                    className="button w-52 text-lg font-semibold"
                    onClick={() => {
                        setShowHp(false);
                        setObj({...obj, stage: stages.DATA});}}
                    >데이터 보러가기</button>
                </div>
            </div>
        </Layout>
    ) : (
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className=" w-full h-96 border-secondary rounded-lg border-2 mr-10">
                        <h1>지역응급센터</h1>
                    </div>
                    {/* <p className=" w-60">관련 인력이 없어요 저희한테는 ㅠㅠ</p> */}
                </div>

                <div>
                    <button 
                    className="button w-52 text-lg font-semibold"
                    onClick={() => {
                        setShowHp(false);
                        setObj({...obj, stage: stages.DATA});}}
                    >데이터 보러가기</button>
                </div>
            </div>
    </Layout>
    )
}