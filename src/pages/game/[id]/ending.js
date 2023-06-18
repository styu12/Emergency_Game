import Layout from "@/components/Layout";
import { choiceCountState, posState, showDescriptionState, showHpState } from "@/states";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Ending() {
    const router = useRouter();
    const { id } = router.query;

    const setChoiceCount = useSetRecoilState(choiceCountState);
    const setPos = useSetRecoilState(posState);
    const setShowHp = useSetRecoilState(showHpState);
    const setShowDescription = useSetRecoilState(showDescriptionState);

    useEffect(() => {
        setChoiceCount(0);
        setPos([50, 50]);
        setShowHp(false);
        setShowDescription(false);
    }, []);

    if(id === '0') {
        return (
            <Layout>
                <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl">
                    <div className="mb-12 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-center text-primary mb-12">
                            환자는 도착했지만 골든 타임을 넘겨 수술이 쉽지 않았다... 깨어날 수 있을까...?
                        </h1>
                        
                        <h2 className="text-xl text-tertiary font-black mb-5">
                            본 스토리는 2022년 서울아산병원 간호사 사망 사건을 모티브로 제작되었습니다.
                        </h2>

                        <div className="p-8 bg-gray-200 text-primary font-bold rounded-2xl mb-5">

                            <h3 className="text-center text-lg font-black mb-3 underline underline-offset-8">
                                아산병원 간호사 사망 ... "응급의료체게 미비 사망사고는 25년째 반복"
                            </h3>
                            <p className="text-center text-base line" style={{
                                lineHeight: '1.8rem'
                            }}>
                                "서울아산병원 간호사 사망 ... 국내 뇌혈관외과 의사 현실은 이렇습니다" <br />
                                서울아산병원 간호사가 근무 중 뇌출혈로 쓰러진 후 사망하는 사건이 발생했다. <br />
                                서울아산병원 30대 간호사 A씨는 극심한 두통으로 병원 응급실을 찾았다. <br />
                                응급실 의료진은 A씨에 대해 뇌출혈로 진단하고 곧바로 혈류를 막는 색전술 처치를 했지만, 출혈이 멈추지 않자 서울대병원 응급실로 긴급 전원 조치했다. <br />
                                하지만 A씨는 서울대병원에서 회복하지 못하고 숨을 거뒀다. <br />
                                이에 대해 아산병원 측은 당시 응급실에 뇌출혈 수술을 할 수 있는 신경외과 의사가 없어 서울대병원으로 전원했다고 설명하고 있다.
                            </p>
                        </div>
                        
                    </div>


                    <Link href="/result">
                        <button className="button">나는 안전할까?</button>
                    </Link>
                </div>
    
            </Layout>
        )
    }   else if(id === '1') {
        return (
            <Layout>
                <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl">
                    <div className="mb-12 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-center text-primary mb-12">
                            계속되는 전원을 견디지 못한 환자는 앰뷸런스 안에서 숨을 거뒀다...
                        </h1>
                        
                        <h2 className="text-xl text-tertiary font-black mb-5">
                            본 스토리는 응급실 뺑뺑이 사망 사건을 모티브로 제작되었습니다.
                        </h2>

                        <div className="p-8 bg-gray-200 text-primary font-bold rounded-2xl mb-5">

                            <h3 className="text-center text-lg font-black mb-3 underline underline-offset-8">
                                응글실 뺑뺑이 사망 사건... 우리 주변에서 일어나고 있는 비극입니다.
                            </h3>
                            <p className="text-center text-base line" style={{
                                lineHeight: '1.8rem'
                            }}>
                                대구 응급실 뺑뺑이 사망 당시, "응급환자 대신 경증 진료" <br />
                                10곳서 퇴짜 맞고 사망, 용인서 일어난 "응급실 뺑뺑이" 비극
                            </p>
                        </div>
                        
                    </div>


                    <Link href="/result">
                        <button className="button">나는 안전할까?</button>
                    </Link>
                </div>
    
            </Layout>
        )
    }   else {
        return (
            <Layout>
                <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl">
                    <div className="mb-12 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-center text-primary mb-12">
                            서울 병원에 도착해서 뇌졸중 진단을 받았는데, 수술할 수 있는 병원이 없다...?
                        </h1>
                        
                        <h2 className="text-xl text-tertiary font-black mb-5">
                            본 스토리는 지방 의료 붕괴 문제를 모티브로 제작되었습니다.
                        </h2>

                        <div className="p-8 bg-gray-200 text-primary font-bold rounded-2xl mb-5">

                            <h3 className="text-center text-lg font-black mb-3 underline underline-offset-8">
                                응급실 도착 전 사망 서울 10명 / 경북 71명 ... 골든타임 '극과 극' (병 나면 서울로, 지방 사는 설움)
                            </h3>
                            <p className="text-center text-base line" style={{
                                lineHeight: '1.8rem'
                            }}>
                                대학병원 의사 2명 중 1명 수도권 근무하는데 수도권에 6600병상 추가 ... "지방 의료 붕괴할 것" <br />
                                도농간 의료 쏠림 심화 - 원정 진료비 12조 달해 <br />
                                10만명당 치료 가능 사망률도 편차 뚜렷 - 충북도 50.56명 최다... 서울은 37.50명 <br />
                                수도권선 응급환자 전원 사유 '시설부족' - 전남/제주/경북 등 수술 곤란 '처치불가' <br />
                                원정환자 늘수록 지방병원 경영난 심화 - 의료질 악화로 인한 환자 외면 악순환 반복
                            </p> 
                        </div>
                        
                    </div>


                    <Link href="/result">
                        <button className="button">나는 안전할까?</button>
                    </Link>
                </div>
    
            </Layout>
        )
    }

    
}