import { captionState, choiceCountState, descriptionState, showCaptionState, showHpState } from "@/states";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { hospitalContents } from "@/contents/Content";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Hospital() {
    const router = useRouter();
    const { id, type } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const setDescription = useSetRecoilState(descriptionState);
    const choiceCount = useRecoilValue(choiceCountState);
    
    useEffect(() => {
        setTimeout(() => {
            setShowCaption(true);
        }, 300);
        setShowHp(false);
    }, []);

    if(type && type === 'general') {
        setCaption({
            title: hospitalContents[id]?.general.capTitle,
            content: hospitalContents[id]?.general.capContent,
        });
        setDescription(hospitalContents[id]?.general.description);
    }
    if(type && type === 'local') {
        setCaption({
            title: hospitalContents[id]?.local.capTitle,
            content: hospitalContents[id]?.local.capContent,
        });
        setDescription(hospitalContents[id]?.local.description);
    }
    

    return type && ( 
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl" style={{
                background: "url('/clinic_background.png')",
                backgroundSize: "contain",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="h-full w-full flex flex-row items-center">
                    <Image src={type === 'general' ? hospitalContents[id]?.general.img : hospitalContents[id]?.local.img} width={500} height={500}
                    className="rounded-xl"
                    />
                </div>

                {/* <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/data`}
                    >데이터 보러가기</Link>
                </div> */}

                {id === '0' && choiceCount >= 2 ? (
                    <div>
                    <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/move`}
                        >다른 병원 골라보자</Link>
                    </div>
                ) : id === '1' && choiceCount >= 3 ? (
                    <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/move`}
                    >다른 병원 골라보자</Link>
                </div>
                ) : id === '2' && choiceCount >= 1 ? (
                    <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/move`}
                    >다른 병원 골라보자</Link>
                </div>
                ) : (
                    <div>
                        <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/choice`}
                        >다른 병원 골라보자</Link>
                    </div>
                )}

            </div>
        </Layout>
    )
}