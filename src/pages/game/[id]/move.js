import Layout from "@/components/Layout";
import { descriptionState, hpState, showHpState } from "@/states";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { motion } from 'framer-motion';

export default function Move() {
    const router = useRouter();
    const { id } = router.query;

    const setDescription = useSetRecoilState(descriptionState);
    const setHp = useSetRecoilState(hpState);
    const setShowHp = useSetRecoilState(showHpState);

    useEffect(() => {
        setDescription(`서울로 이동하는 시간이 너무 오래 걸려
        환자의 생명이 위험합니다.
        빨리 응급실로 이동하세요!`
        );
        setShowHp(true);
        setHp(20);
    
        setTimeout(() => {
            router.push(`/game/${id}/hospital?type=general`);
        }, 4000);
    }, [id]);

    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <motion.div className="h-full w-full flex flex-row justify-center px-32 py-16" style={{
                    backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/02/94/68/26/1000_F_294682612_2UieVggk1ug4ZhFGzwS9FN5TqeOftRvm.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 5 }}
                >
                    <h1 className="text-6xl font-bold text-center text-primary mb-12">서울로 환자 이송 중</h1>
                </motion.div>
            </div>
        </Layout>
    )
}