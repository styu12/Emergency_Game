import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { captionState, descriptionState, hpState, showCaptionState, showHpState } from "@/states";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { accidentContents } from "@/contents/Content";
import Image from "next/image";

export default function Accident() {
    const router = useRouter();
    const { id } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setHp = useSetRecoilState(hpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const setDescription = useSetRecoilState(descriptionState);

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

    setDescription(accidentContents[id]?.description);



    return accidentContents && (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-12 items-center">
                    {/* <div className='w-full h-2/3 rounded-2xl shadow-lg bg-contain bg-center bg-no-repeat' 
                    style={{
                        backgroundImage: `url(${accidentContents[id]?.img})`,
                    }}>
                    </div> */}
                    <Image src={accidentContents[id]?.img} 
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                    />
                    {/* <p className=" w-60">서울대학교 재학 중인 20대 초반 김모군은 평상시처럼 수업듣던 중 머리에 통증을 느끼고 쓰러짐</p> */}
                </div>

                <div>
                    {id === "0" ? (
                        <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/choice`}
                        >환자를 살려주세요!!</Link>
                    ) : (
                        <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/city`}
                        >환자를 살려주세요!!</Link>
                    )}
                    
                </div>
            </div>
        </Layout>
    )
}