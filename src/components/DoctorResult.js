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
                        "2020년 서울시 인구 10만명당 응급의학 전문의 수 :" : 
                        "당신을 살릴 응급의학전문의는 몇 명일까요?"
                    }
                </h2>
                <span className="text-3xl text-red-500 ml-4 font-bold">{change ? '9명' : "빨간 점을 찾아보세요!!"}</span>
            </div>
            
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