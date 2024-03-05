import type {Metadata} from "next";
import NotFound from "./not-found.client";

export const metadata: Metadata = {
    title: "Error 404 | Konstantin Lukas",
    description: "Das angeforderte Dokument konnte nicht gefunden werden."
};

export default function Page() {
    return (
        <NotFound/>
    )
}