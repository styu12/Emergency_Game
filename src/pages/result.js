import DistanceResult from "@/components/DistanceResult";
import DoctorResult from "@/components/DoctorResult";
import Layout, { FullLayout } from "@/components/Layout";
import { showDescriptionState, showHpState } from "@/states";
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
                    <button onClick={() => setType("city")} className="button !px-10 mr-5">서울</button>
                    <button onClick={() => setType("town")} className="button !px-10">그 외</button>
                </div>
            </div>
        </Layout>
       ) : (
        type === "city" ? (
        <FullLayout>
            <DoctorResult setType={setType} />
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