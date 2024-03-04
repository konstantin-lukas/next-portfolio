"use client";

import {languages} from "@/app/utils/data";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useMemo, useRef, useState} from "react";


export default function Page() {
    const sprachen = languages.map((l, i) => {
        return (
            <div className={styles["language"]} id={styles[l.id]} key={i}>
                <Image
                    draggable="false"
                    className={styles["region_outline"]}
                    src={`/images/outline_${l.id}.svg`}
                    alt={l.name}
                    width={2000}
                    height={2000}
                />
                <div className={styles["language_text"]}>
                    <div className={styles["heading_cont"]}>
                        <h1 className={styles["pinkdot"]}>{l.name}</h1>
                        <span className={styles["play_button_cont"]}>
                            <svg className={styles["play_button"]} viewBox="0 0 245.5 283.5">
                                <polygon points="124.8,211.4 0,283.5 0,141.7 0,0 124.8,72.1 "/>
                                <polygon points="245.5,141.7 120.2,214.1 120.2,69.4 245.5,141.7 245.5,141.7 "/>
                            </svg>
                        </span>
                    </div>
                    <p>
                        <span className={styles["hide_scroll_bar"]} lang="en-gb">
                            {l.text}
                        </span>
                        <span className={styles["shadow_top"]}></span>
                        <span className={styles["shadow_bottom"]}></span>
                    </p>
                    <Link
                        className={styles["underline"] + " " + styles["level"]}
                        target="_blank"
                        href="https://www.cambridgeenglish.org/de/exams-and-tests/proficiency/"
                    >
                        Niveau: {l.level}
                    </Link>
                </div>
            </div>
        );
    });

    const [index, setIndex] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        setIndex(scrollAmount % sprachen.length);
    }, [scrollAmount, sprachen]);

    const [disable, setDisable] = useState(false);
    const dots = useMemo(() => {
        const elements = [];
        for (let i = 0; i < sprachen.length; i++) {
            if (i === index)
                elements.push(<span key={i} className={styles["current_dot"]}></span>)
            else
                elements.push(<span key={i} onClick={() => {
                    if (!disable) {
                        setScrollAmount(i);
                        setDisable(true);
                    }
                }}></span>)
        }
        return elements;
    }, [sprachen.length, index, disable]);
    const [noAnim, setNoAnim] = useState(false);
    const [previousTouch, setPreviousTouch] = useState(0);

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (!disable) {
                const direction = (e.deltaY > 0) ? 1 : -1;
                setScrollAmount(prev => {
                    let i = (prev + direction);
                    if (i < 0) {
                        i = sprachen.length;
                        setNoAnim(true);
                        setDisable(true);
                    }
                    return i;
                });
                setDisable(true);
            }
        }
        document.addEventListener('wheel', handleScroll);
        return () => {
            document.removeEventListener('wheel', handleScroll);
        }
    }, [disable, sprachen]);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (noAnim && containerRef.current) {
            containerRef.current.offsetHeight;
            setNoAnim(false);
            if (scrollAmount === sprachen.length) {
                setScrollAmount(sprachen.length - 1);
            }
        }
    }, [scrollAmount, noAnim, sprachen.length]);


    return (
        <div className={styles["body"]}>
            <div id={styles["lang_container_fix"]}>
                <div
                    id={styles["lang_container"]}
                    ref={containerRef}
                    style={{
                        transform: `translate(0px, -${scrollAmount * 100}vh)`,
                        transition: noAnim ? "none" : "transform 0.65s cubic-bezier(.36,.81,.31,1)"
                    }}
                    onTransitionEnd={() => {
                        if (scrollAmount > sprachen.length - 1) {
                            setScrollAmount(0);
                            setNoAnim(true);
                        }
                        setDisable(false);
                    }}
                >
                    <div>{sprachen}</div>
                    <div>{sprachen}</div>
                </div>
            </div>
            <div id={styles["slide_menu"]}>
                {dots}
            </div>
        </div>
    );
}