import Layout from "@/components/Layout";
import { showCaptionState, showHpState } from "@/states";
import Link from "next/link";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const setShowCaption = useSetRecoilState(showCaptionState);
  const setShowHp = useSetRecoilState(showHpState);

  useEffect(() => {
    setShowCaption(false);
    setShowHp(false);
}, []);

  return (
    <Layout>
      <h1 className="text-6xl font-bold text-center text-primary mb-12">Emergency Game</h1>
      <h2 className='mb-10 text-4xl font-bold text-secondary'>우리는 살  수 있을까?</h2>
      <h3 className='mb-5 text-2xl font-semibold'>캐릭터를 선택해주세요</h3>

      <div className='flex w-full justify-between'>
      <Link href='/game/1' className='button'>
          대학생
      </Link>
      <Link href='/game/2' className='button'>
          대구 거주 우울증 환자
      </Link>
      <Link href='/game/3' className='button'>
          노인
      </Link>
      </div>     
    </Layout>
  )
}
