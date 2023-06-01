import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { captionState, hpState, showCaptionState, showHpState } from "@/states";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { accidentContents } from "@/contents/Content";

export default function Accident() {
    const router = useRouter();
    const { id } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setHp = useSetRecoilState(hpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);

    useEffect(() => {
        setTimeout(() => {
            setShowCaption(true);
            setHp(50);
        }, 300);
        setShowHp(true);
    }, []);

    setCaption({
        title: accidentContents[id]?.capTitle,
        content: accidentContents[id]?.capContent,
    });



    return accidentContents && (
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className='w-full h-2/3  border-secondary rounded-lg border-2 mr-10' 
                    style={{
                        backgroundImage: `url(${accidentContents[id]?.img})`,
                    }}>
                        <h1>쓰러진모습</h1>
                    </div>
                    {/* <p className=" w-60">서울대학교 재학 중인 20대 초반 김모군은 평상시처럼 수업듣던 중 머리에 통증을 느끼고 쓰러짐</p> */}
                </div>

                <div>
                    <Link 
                    className="button w-52 text-lg font-semibold"
                    href={`/game/${id}/choice`}
                    // onClick={() => {
                    //     setObj({...obj, stage: stages.CHOICE});
                    //     setShowHp(false);
                    // }}
                    >환자를 살려주세요!!</Link>
                </div>
            </div>
        </Layout>
    )
}