import { captionState, descriptionState, showCaptionState, showHpState } from "@/states";
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
    const setDescription = useSetRecoilState(descriptionState);
    
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
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-row justify-center px-32 items-center">
                    <div className=" w-full h-2/3 border-secondary rounded-lg border-2"
                    style={{
                        backgroundImage: type === 'general' ? `url(${hospitalContents[id]?.general.img})` : `url(${hospitalContents[id]?.local.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    >
                        <h1>권역응급센터</h1>
                    </div>
                </div>

                <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/data`}
                    >데이터 보러가기</Link>
                </div>
            </div>
        </Layout>
    )
}