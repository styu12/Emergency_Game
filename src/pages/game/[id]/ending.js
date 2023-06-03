import Layout from "@/components/Layout";
import Link from "next/link";

export default function Ending() {
    return (
        <Layout>
            <h1 className="text-6xl font-bold text-center text-secondary mb-12">사망!!</h1>
            <Link href="/result">
                <button className="button">나는 안전할까?</button>
            </Link>

        </Layout>
    )
}