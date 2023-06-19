import { useState } from "react"


export default function DoctorResult({setType}) {
    const [change, setChange] = useState(false);
    

    return (
        <div className="w-full h-[90vh]">
            <div className="flex items-center mb-10">
                <button className="mr-5 button" onClick={() => setType("")}>Before</button>
                <h2 className='text-4xl font-bold text-primary'>
                    {
                        change ? 
                        "찾을 수 있으셨나요?" : 
                        "그림에서 빨간 점을 찾아보세요."
                    }
                </h2>
            </div>

            <p className="text-2xl ml-32">
                    {change ? 
                    '이 그림은 2020년 서울시 인구 10만 명 당 응급의학 전문의 수(9명)를 검은 점 사이 빨간 점으로 표시한 모습입니다.' : 
                    "당신을 살릴 수 있는 응급의학전문의가 이 사이에 숨어 있습니다!"
                    }
                </p>
            
            <div className="flex justify-between items-center w-full h-full">
                <div className={`w-[90%] h-[100%] transition-all duration-500`}
                style={{
                    background: change ?  'no-repeat center/70% url("/point_after.png")' : 'no-repeat center/70% url("/point.png")',
                }}
                />
                <button className="button" onClick={() => setChange(prev => !prev)}>
                    {
                        change ? 
                        "정답 숨기기" :
                        "정답 보기"
                    }
                </button>
            </div>
        </div>
    )
}