import { useRecoilValue, useSetRecoilState } from "recoil";
import { captionState, choiceCountState, descriptionState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { dataContents } from "@/contents/Content";
import Image from "next/image";

export default function Data() {
    const router = useRouter();
    const { id } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const setDescription = useSetRecoilState(descriptionState);
    const choiceCount = useRecoilValue(choiceCountState);
    

    useEffect(() => {
        // setTimeout(() => {
        //     setShowCaption(true);
        // }, 300);
        // setShowHp(false);
    }, []);

    setCaption({
        title: dataContents[id]?.capTitle,
        content: dataContents[id]?.capContent,
    });

    setDescription(dataContents[id]?.description);

    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center">
                    <Image src={dataContents[id]?.img} width={1000} height={500}
                    className="rounded-xl shadow-lg"
                    />
                </div>

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