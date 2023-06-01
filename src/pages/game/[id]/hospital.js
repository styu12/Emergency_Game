import { captionState, showCaptionState, showHpState } from "@/states";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { hospitalContents } from "@/contents/Content";
import { useRouter } from "next/router";

export default function Hospital() {
    const router = useRouter();
    const { id, type } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    
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
    }
    if(type && type === 'local') {
        setCaption({
            title: hospitalContents[id]?.local.capTitle,
            content: hospitalContents[id]?.local.capContent,
        });
    }
    

    return type && ( 
        <Layout>
            <div className="h-[75vh] flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center mb-10">
                    <div className=" w-full h-96 border-secondary rounded-lg border-2 mr-10"
                    style={{
                        backgroundImage: type === 'general' ? `url(${hospitalContents[id]?.general.img})` : `url(${hospitalContents[id]?.local.img})`,
                    }}
                    >
                        <h1>권역응급센터</h1>
                    </div>
                </div>

                <div>
                    <Link 
                    className="button w-52 text-lg font-semibold"
                    href={`/game/${id}/data`}
                    >데이터 보러가기</Link>
                </div>
            </div>
        </Layout>
    )
}