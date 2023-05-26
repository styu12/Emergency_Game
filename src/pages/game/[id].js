import CharacterOne from "@/components/CharacterOne";
import { useRouter } from "next/router";

export  default function Play() {
    const router = useRouter();
    const id = router.query.id;

    switch (id) {
        case '1':
            return <CharacterOne />
        case '2':
            return <CharacterOne />
        default:
            return <CharacterOne />
    }
}