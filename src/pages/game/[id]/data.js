import { useSetRecoilState } from "recoil";
import { captionState, showCaptionState, showHpState } from "@/states";
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

    return (
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className=" w-full h-96 border-secondary rounded-lg border-2 mr-10"
                    style={{
                        backgroundImage: `url(${dataContents[id]?.img})`,
                    }}
                    >
                        <h1>데이터!!</h1>
                    </div>
                </div>

                <div>
                    <Link 
                    className="button w-52 text-lg font-semibold"
                    href={`/game/${id}/choice`}
                    // onClick={() => {
                    //     setShowHp(true);
                    //     setObj({...obj, stage: stages.CHOICE});}}
                    >다른 병원 골라보자</Link>
                </div>
            </div>
        </Layout>
    )
}   