import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { captionState, hpState, showCaptionState, showHpState } from "@/states";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { accidentContents } from "@/contents/Content";
import { motion } from 'framer-motion';

export default function City() {
    const router = useRouter();
    const { id } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setHp = useSetRecoilState(hpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowCaption(true);
    //         setHp(50);
    //     }, 300);
    //     setShowHp(true);
    // }, []);

    setCaption({
        title: accidentContents[id]?.capTitle,
        content: accidentContents[id]?.capContent,
    });   

    return accidentContents && (
        <Layout>
            <div className="w-full h-full flex items-center justify-center rounded-3xl">
                <motion.div className="h-full flex-1  rounded-l-3xl flex justify-center items-center cursor-pointer"
                style={{
                    backgroundImage: 'url(https://i.ytimg.com/vi/kWOrj8pk-Mk/maxresdefault.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                whileHover={{ opacity: 1}}
                initial={{ opacity: 0.4}}
                onClick={() => router.push(`/game/${id}/accident`)}
                >
                    <h1 className="text-6xl font-bold text-center text-primary mb-12">도시</h1>
                </motion.div>
                <motion.div className="h-full flex-1 bg-blue-300 rounded-r-3xl flex justify-center items-center cursor-pointer"
                style={{
                    backgroundImage: 'url(https://media.istockphoto.com/id/165733081/vector/countryside-with-village.jpg?s=612x612&w=0&k=20&c=Bvy_Qmz8hOEtzCNyO8C-8tmF21wcKV9Ze7qaOZuD79k=)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                whileHover={{ opacity: 1}}
                initial={{ opacity: 0.4}}
                onClick={() => router.push(`/game/${id}/accident`)}
                >
                    <h1 className="text-6xl font-bold text-center text-primary mb-12">지역</h1>
                </motion.div>
            </div>
        </Layout>
    )
}

{/* <Link 
className="button w-52 text-lg font-semibold"
href={`/game/${id}/choice`}
>환자를 살려주세요!!</Link> */}