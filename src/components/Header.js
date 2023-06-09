import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { descriptionState, hpState, showDescriptionState, showHpState } from "@/states";
import { motion } from "framer-motion";

export default function Header() {
    const hp = useRecoilValue(hpState);
    const showHp = useRecoilValue(showHpState);
    const description = useRecoilValue(descriptionState);
    const showDescription = useRecoilValue(showDescriptionState);

    return (
        <header className="fixed left-0 top-0 flex flex-col items-center h-screen w-[18vw] py-10 px-0 bg-[#f5f5f5] shadow-sm">
            <div className="flex items-center mb-10">
                <div className="mr-6">
                    <Link href="/" className="text-lg font-bold text-primary">
                     🚑 Emergency Game
                    </Link>
                </div>
            </div>

                {showHp && (
                <div className="w-24 flex flex-col items-center">
                    <span className="mb-1">HP : {hp}</span>
                    <motion.div 
                    className="w-24 h-6 border-secondary border-2 rounded-2xl relative"
                    initial={{ borderColor: '#16a085' }}
                    animate={{ borderColor: '#e67e22' }}
                    transition={{
                        type: "spring",
                        ease: "easeInOut",
                      }}
                    >
                        <motion.div
                         className={`h-full rounded-2xl absolute top-0 left-0 hp`}
                         initial={{ width: '100%', backgroundColor: '#16a085' }}
                         animate={{ width: `${hp}%`, backgroundColor: '#e67e22' }}
                         transition={{
                             type: "spring",
                             ease: "easeInOut",
                             duration: 2,
                           }}
                         />
                    </motion.div>
                </div>
                )}

            {showDescription && (
                <div className="flex flex-col items-center mt-16 py-12 px-4 mx-3 bg-white rounded-3xl text-primary shadow-md">
                    <p className="text-center text-lg">{description}</p>
                </div>
            )}
        </header>
    )
}