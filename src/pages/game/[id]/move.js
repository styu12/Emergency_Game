import Layout from "@/components/Layout";
import { captionState, descriptionState, hpState, showCaptionState, showHpState } from "@/states";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { motion } from 'framer-motion';
import { moveContents } from "@/contents/Content";

export default function Move() {
    const router = useRouter();
    const { id } = router.query;

    const setDescription = useSetRecoilState(descriptionState);
    const setCaption = useSetRecoilState(captionState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setHp = useSetRecoilState(hpState);
    const setShowHp = useSetRecoilState(showHpState);

    useEffect(() => {
        setShowHp(true);
        if(id && id === '1') {
            setHp(0);
        }   else {
            setHp(10);
        }

        setTimeout(() => {
            setShowCaption(true);
        }, 300);

        setTimeout(() => {
            setShowCaption(false);
        }, 2500);
        
        setTimeout(() => {
            router.push(`/game/${id}/final`);
        }, 7000);
    }, [id]);

    setCaption({
        title: moveContents[id]?.capTitle,
        content: moveContents[id]?.capContent,
    });

    setDescription(moveContents[id]?.description);

    return moveContents && (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <motion.div className="h-full w-full flex flex-row justify-center px-32 py-16" style={{
                    backgroundImage: `url(${moveContents[id]?.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 7 }}
                >
                    {/* <h1 className="text-6xl font-bold text-center text-primary mb-12">환자 이송 중</h1> */}
                </motion.div>
            </div>
        </Layout>
    )
}