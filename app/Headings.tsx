import {useEffect, useRef} from "react";
import {Scramble} from "@/app/utils/utils";

export default function Headings({h1, h2}: {
    h1: string,
    h2: string
}) {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const scrambleH1 = useRef<Scramble>();
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const scrambleH2 = useRef<Scramble>();

    useEffect(() => {
        if (h1Ref.current && !scrambleH1.current) {
            scrambleH1.current = new Scramble(h1Ref.current);
        }
    }, [h1Ref]);

    useEffect(() => {
        if (h2Ref.current && !scrambleH2.current) {
            scrambleH2.current = new Scramble(h2Ref.current);
        }
    }, [h2Ref]);

    useEffect(() => {
        if (scrambleH1.current && h1Ref.current && h1Ref.current.innerHTML !== h1) {
            scrambleH1.current.setText(h1);
        }
    }, [h1]);

    useEffect(() => {
        if (scrambleH2.current && h2Ref.current && h2Ref.current.innerHTML !== h2) {
            scrambleH2.current.setText(h2);
        }
    }, [h2]);

    return (
        <>
            <h1 ref={h1Ref}>Konstantin Lukas</h1>
            <h2 ref={h2Ref}>Full-Stack Developer</h2>
        </>
    )
}