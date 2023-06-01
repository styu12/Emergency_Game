import { useSetRecoilState } from "recoil";
import { captionState, descriptionState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { dataContents } from "@/contents/Content";

export default function Data() {
    const router = useRouter();
    const { id } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const setDescription = useSetRecoilState(descriptionState);
    

    useEffect(() => {
        setTimeout(() => {
            setShowCaption(true);
        }, 300);
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
                    <div className=" w-full h-2/3 border-secondary rounded-lg border-2"
                    style={{
                        backgroundImage: `url(${dataContents[id]?.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    >
                        <h1>데이터!!</h1>
                    </div>
                </div>

                <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/choice`}
                    >다른 병원 골라보자</Link>
                </div>
            </div>
        </Layout>
    )
}   