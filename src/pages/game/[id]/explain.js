import { useRecoilValue, useSetRecoilState } from "recoil";
import { captionState, choiceCountState, descriptionState, showCaptionState, showHpState } from "@/states";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { dataContents } from "@/contents/Content";
import Image from "next/image";

export default function Explain() {
    const router = useRouter();
    const { id, type } = router.query;

    const setShowHp = useSetRecoilState(showHpState);
    const setShowCaption = useSetRecoilState(showCaptionState);
    const setCaption = useSetRecoilState(captionState);
    const setDescription = useSetRecoilState(descriptionState);
    const choiceCount = useRecoilValue(choiceCountState);
    

    useEffect(() => {
        // setTimeout(() => {
        //     setShowCaption(true);
        // }, 300);
        // setShowHp(false);
    }, []);

    setCaption({
        title: dataContents[id]?.capTitle,
        content: dataContents[id]?.capContent,
    });

    if(type && type === 'general') {
        setDescription(dataContents[id]?.general[1].description);
    }   else {        
        setDescription(dataContents[id]?.local[1].description);
    }

    return dataContents && type && (
        <Layout>
            <div className="w-full h-full flex flex-col items-center justify-center">

                <span className="absolute top-10 left-10 bg-gray-300 py-3 px-5 font-black rounded-2xl">
                    Did you know..
                </span>

                {type === 'general' ? (
                    <div className="h-full w-full flex flex-col justify-center px-16 items-center">
                        <h2 className='mb-5 text-2xl font-bold text-primary text-center'>
                            {dataContents[id]?.general[1].title}
                        </h2>

                        <Image src={dataContents[id]?.general[1].img} width={800} height={500}
                        className="rounded-xl shadow-lg"
                        />
                    </div>
                ) : (
                    <div className="h-full w-full flex flex-col justify-center px-16 items-center">
                        <h2 className='mb-5 text-2xl font-bold text-primary text-center'>
                        {dataContents[id]?.local[1].title}
                        </h2>

                        <Image src={dataContents[id]?.local[1].img} width={800} height={500}
                        className="rounded-xl shadow-lg"
                        />
                    </div>
                )}

                {id === '0' && choiceCount >= 2 ? (
                    <div>
                    <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/move`}
                        >다른 병원 골라보자</Link>
                    </div>
                ) : id === '1' && choiceCount >= 3 ? (
                    <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/move`}
                    >다른 병원 골라보자</Link>
                </div>
                ) : id === '2' && choiceCount >= 1 ? (
                    <div>
                    <Link 
                    className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                    href={`/game/${id}/move`}
                    >다른 병원 골라보자</Link>
                </div>
                ) : (
                    <div>
                        <Link 
                        className="button fixed bottom-10 right-10 w-52 text-lg font-semibold"
                        href={`/game/${id}/choice`}
                        >다른 병원 골라보자</Link>
                    </div>
                )}
                
            </div>
        </Layout>
    )
}   