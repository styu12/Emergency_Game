import { captionState, showCaptionState } from "@/states";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Caption() {
    const [showCaption, setShowCaption] = useRecoilState(showCaptionState);
    const caption = useRecoilValue(captionState);

    return (
    <div className={
        `fixed bottom-0 left-0 w-screen h-80 bg-orange-300 rounded-xl p-10
         flex flex-col items-center justify-between
         transition transform ease-in-out duration-500
        ${showCaption ?  "translate-y-0" : "translate-y-80"}`
        }>
        <div>
            <h2 className="text-2xl font-bold text-center text-tertiary mb-5">{caption.title}</h2>
            <p className="text-lg text-center mb-5">
                {caption.content}
            </p>    
        </div>
        <button className=" place-self-end button" onClick={() => setShowCaption(false)} >NEXT</button>
    </div>
    )}

    // ${showCaption ?  "animate-caption-up" : "animate-caption-down"}