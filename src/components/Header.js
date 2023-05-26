import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { hpState, showHpState } from "@/states";

export default function Header() {
    const route = useRouter();
    const hp = useRecoilValue(hpState);
    const showHp = useRecoilValue(showHpState);

    return (
        <header className="flex items-center justify-between h-24 px-12 py-5 bg-white shadow-sm">
            <div className="flex items-center">
                <div className="mr-6">
                    <Link href="/" className="text-2xl font-bold text-primary">
                     🚑 Emergency Game
                    </Link>
                </div>
            </div>

                {showHp && (
                <div className="w-24 flex flex-col items-center">
                    <span className="mb-1">HP : {hp}</span>
                    <div className="w-24 h-6 border-secondary border-2 rounded-2xl relative">
                        <div className=" h-full bg-secondary rounded-2xl absolute top-0 left-0 hp"></div>
                        <style jsx global>{`
                            .hp {
                                width: ${hp}%;
                                -webkit-transition:width 1s;
                                transition: width 1s;
                            }
                        `}</style>
                        {/* <div className={hpStyles.join(" ")}></div> */}
                    </div>
                </div>
                )}
        </header>
    )
}