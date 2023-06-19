import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { captionState, descriptionState, hpState, showCaptionState, showHpState } from "@/states";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { finalContents } from "@/contents/Content";
import Image from "next/image";

export default function Final() {
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
        }, 300);
        setShowHp(true);
    }, []);

    setCaption({
        title: finalContents[id]?.capTitle,
        content: finalContents[id]?.capContent,
    });

    setDescription(finalContents[id]?.description);



    return finalContents && (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-12 items-center">
                    <Image src={finalContents[id]?.img} 
                    alt="accident"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                    />
                </div>

                <div>
                        <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/ending`}
                        >생존할 수 있을까요..?</Link>
                    
                </div>
            </div>
        </Layout>
    )
}