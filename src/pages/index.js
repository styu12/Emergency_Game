import Layout from "@/components/Layout";
import { descriptionState, showCaptionState, showDescriptionState, showHpState } from "@/states";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const setShowCaption = useSetRecoilState(showCaptionState);
  const setShowHp = useSetRecoilState(showHpState);
  const setDescription = useSetRecoilState(descriptionState);
  const setShowDescription = useSetRecoilState(showDescriptionState);


  useEffect(() => {
    setShowCaption(false);
    setShowHp(false);
    setShowDescription(true);
    setDescription(`Emergency Game 
    원하는 캐릭터를 골라주세요`);
}, []);

  return (
    <Layout>
      <div className="w-full h-full px-12 py-6">
        <h1 className="text-6xl font-bold text-center text-skyblue mb-12">Emergency Game</h1>
        <h2 className='mb-10 text-4xl font-bold text-primary'>우리는 살  수 있을까?</h2>
        <h3 className='mb-5 text-2xl font-semibold text-primary'>캐릭터를 선택해주세요</h3>

        <div className='flex w-full justify-between p-20'>
        <Link href='/game/0/accident'>
            <Image className=" shadow-xl transition-transform hover:scale-125 rounded-2xl" src='/student.png' width={250} height={250} alt='student' />
            <h3 className="mt-10 text-xl text-center text-primary font-bold">김모 군</h3>
            <p className="mt-3 text-center">
              23세 남학생<br />
              서울대학교 재학 <br />
              암벽 등반을 즐김 <br />
            </p>
        </Link>

        <Link href='/game/1/accident'>
          <Image className=" shadow-2xl transition-transform hover:scale-125 rounded-2xl" src='/woman.png' width={250} height={250} alt='girl' /> 
          <h3 className="mt-10 text-xl text-center text-primary font-bold">박모 양</h3>
          <p className="mt-3 text-center">
              30대 평범한 직장인<br />
              대구 거주 <br />
              공황으로 인한 실신이 잦음 <br />
            </p>
        </Link>

        <Link href='/game/2/accident'>
          <Image className=" shadow-2xl transition-transform hover:scale-125 rounded-2xl" src='/grandma.png' width={250} height={250} alt='grandpa' />
          <h3 className="mt-10 text-xl text-center text-primary font-bold">김복자 할머니</h3>
          <p className="mt-3 text-center">
              65세 할머니 <br />
              전남 홀로 거주 <br />
              편두통 앓음 <br />
            </p>
        </Link>
        </div>    
      </div> 
    </Layout>
  )
}
