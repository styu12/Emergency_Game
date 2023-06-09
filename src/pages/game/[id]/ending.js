import Layout from "@/components/Layout";
import { showDescriptionState } from "@/states";
import Link from "next/link";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Ending() {
    const setShowDescription = useSetRecoilState(showDescriptionState);

    useEffect(() => {
        setShowDescription(false);
    }, []);

    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl">
                <h1 className="text-6xl font-bold text-center text-skyblue mb-12">사망!!</h1>
                <Link href="/result">
                    <button className="button">나는 안전할까?</button>
                </Link>
            </div>

        </Layout>
    )
}