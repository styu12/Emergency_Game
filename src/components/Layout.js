import Header from "./Header";
import Caption from "./Caption";

export default function Layout({children}) {
    return (
    <div className="container relative">
        
        <Header />        

        <main className="h-full px-12 py-5 ">
            {children}
        </main>

        <Caption />
    </div>
    )
} 