import Header from "./Header";
import Caption from "./Caption";
import Head from "next/head";
import { showCaptionState } from "@/states";
import { useRecoilValue } from "recoil";


export default function Layout({children}) {
    const showCaption = useRecoilValue(showCaptionState);
    return (
    <div className="container relative">

        <Head>
        <title>🚑 Emergency Game</title>
        <meta name="description" content="Emergency Game" />
      </Head>
        
        <Header />        

        <main className="h-full px-12 py-5 ">
            {children}
        </main>

         <Caption />
    </div>
    )
} 

export function FullLayout({ children }) {
    return (
        <div className="relative">
    
            <Header />        

            <Head>
            <title>🚑 Emergency Game</title>
            <meta name="description" content="Emergency Game" />
          </Head>      
    
            <main className="h-full">
                {children}
            </main>
    
            <Caption />
        </div>
        )
}