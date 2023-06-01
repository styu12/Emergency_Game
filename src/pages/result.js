import DistanceResult from "@/components/DistanceResult";
import DoctorResult from "@/components/DoctorResult";
import { FullLayout } from "@/components/Layout";
import { useState } from "react";

export default function Result() {
    const [type, setType] = useState("");

    return (
     <FullLayout>
       {type === "" ? (
        <div className="flex flex-col items-center">
                <h1 className="text-6xl font-bold text-center text-primary mb-12">당신은 생존할 수 있을까요?</h1>
                <h2 className='mb-10 text-4xl font-bold text-secondary'>본인이 살고 있는 지역을 골라주세요</h2>
                <div>
                    <button onClick={() => setType("city")} className="button mr-10 !px-10">도시</button>
                    <button onClick={() => setType("town")} className="button !px-10">지방</button>
                </div>
        </div>
       ) : (
        type === "city" ? (
        <DoctorResult />
       ) : (
        <DistanceResult />
       )
    )}
     </FullLayout> 
    )
}