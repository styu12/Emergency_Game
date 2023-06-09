import DistanceResult from "@/components/DistanceResult";
import Layout, { FullLayout } from "@/components/Layout";
import { showDescriptionState, showHpState } from "@/states";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function Result() {
    const [type, setType] = useState("");
    const setShowDescription = useSetRecoilState(showDescriptionState);
    const setShowHp = useSetRecoilState(showHpState);

    useEffect(() => {
        setShowDescription(false);
        setShowHp(false);
    }, []);

    return (
     <>
       {type === "" ? (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl">
                <h1 className="text-6xl font-bold text-center text-primary mb-12">당신은 생존할 수 있을까요?</h1>
                <h2 className='mb-10 text-4xl font-bold text-skyblue'>본인이 살고 있는 지역을 골라주세요</h2>
                <div className="flex">
                    <button onClick={() => setType("city")} className="button mr-10 !px-10 mr-5">도시</button>
                    <button onClick={() => setType("town")} className="button !px-10">지방</button>
                </div>
            </div>
        </Layout>
       ) : (
        type === "city" ? (
        // <DoctorResult />
        <FullLayout>
            <div className="w-full h-[90vh]">
            <div className="flex items-center mb-10">
                <button className="mr-5 button" onClick={() => setType("")}>Before</button>
                <h2 className='text-4xl font-bold text-primary'>수도권 인구 10만명당 전문의 수 : 9명</h2>
            </div>
            
            <div className="w-full h-[90%]"
            style={{
                background: 'url("/point.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
            }}
            />
        </div>
        </FullLayout>
       ) : (
        <FullLayout>
            <DistanceResult setType={setType} />
        </FullLayout>
       )
    )}
     </> 
    )
}