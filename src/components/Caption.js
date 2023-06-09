import { captionState, showCaptionState } from "@/states";
import { useRecoilState, useRecoilValue } from "recoil";
import { motion } from "framer-motion";

export default function Caption() {
    const [showCaption, setShowCaption] = useRecoilState(showCaptionState);
    const caption = useRecoilValue(captionState);

    return (
        <motion.div className="fixed bottom-0 left-0 w-screen h-80 bg-secondary rounded-xl p-10
             flex flex-col items-center justify-between"

            initial={{ opacity: 0, y: 320 }}
            animate={{ opacity: showCaption ? 1 : 0, y: showCaption ? 0 : 320 }}
            transition={{
                duration : 0.5
              }}
            
            >
            <div>
                <h2 className="text-2xl font-bold text-center text-primary mb-5">{caption.title}</h2>
                <p className="text-lg text-center mb-5">
                    {caption.content}
                </p>    
            </div>
            <button className=" place-self-end button" onClick={() => setShowCaption(false)} >NEXT</button>
        </motion.div>
        )}