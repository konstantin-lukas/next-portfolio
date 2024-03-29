"use client";

import styles from "./page.module.scss";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {projects} from "@/app/utils/data";
import {toSnakeCase} from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import Headings from "./Headings";

function getHeight(el: HTMLDivElement) {
    let elmHeight = 0, elmMargin = 0;
    if (document.defaultView) {
        if (window.innerHeight < window.innerWidth) {
            elmHeight = parseFloat(document.defaultView.getComputedStyle(el).getPropertyValue('height'));
            elmMargin = parseFloat(document.defaultView.getComputedStyle(el).getPropertyValue('margin-top'))
                + parseFloat(document.defaultView.getComputedStyle(el).getPropertyValue('margin-bottom'));
        } else {
            elmHeight = parseFloat(document.defaultView.getComputedStyle(el).getPropertyValue('width'));
            elmMargin = parseFloat(document.defaultView.getComputedStyle(el).getPropertyValue('margin-left'))
                + parseFloat(document.defaultView.getComputedStyle(el).getPropertyValue('margin-right'));
        }
    }

    return (elmHeight + elmMargin);
}

export default function Page() {

    const [headings, setHeadings] = useState({
        h1: "Konstantin Lukas",
        h2: "Full-Stack Developer"
    })

    const setScrollPos = useState(0)[1];

    const checkScrollPos = useCallback(function (ref: HTMLDivElement, scrollSpeed: number, delta: number) {
        const elem = ref.querySelector('div');
        if (elem) {
            if (window.innerWidth > window.innerHeight) {
                setScrollPos(prev => {
                    const maxScrollPos = getHeight(elem) * projects.length;
                    const newScrollPos = prev + scrollSpeed * delta;
                    if (newScrollPos < 0) {
                        ref.scrollTo(0, newScrollPos + maxScrollPos);
                        return newScrollPos + maxScrollPos;
                    } else {
                        if (newScrollPos >= maxScrollPos) {
                            ref.scrollTo(0, 0);
                            return 0;
                        } else {
                            ref.scrollTo(0, newScrollPos);
                            return newScrollPos;
                        }
                    }
                });
            } else {
                setScrollPos(prev => {
                    const maxScrollPos = getHeight(elem) * projects.length;
                    const newScrollPos = prev + scrollSpeed * delta;
                    if (newScrollPos < 0) {
                        ref.scrollTo(newScrollPos + maxScrollPos, 0);
                        return newScrollPos + maxScrollPos;
                    } else {
                        if (newScrollPos >= maxScrollPos) {
                            ref.scrollTo(0, 0);
                            return 0;
                        } else {
                            ref.scrollTo(newScrollPos, 0);
                            return newScrollPos;
                        }
                    }
                });
            }
        }
    }, [setScrollPos]);

    const projectHTML = useMemo(() => projects.map((p, i) => {
        return (
            <div className={styles["project_prev"]} key={i}>
                <Link
                    href={"/projekte/" + encodeURIComponent(p.name.toLowerCase().replaceAll(' ', '-'))}
                    onMouseOver={() => {
                        setHeadings({
                            h1: p.name,
                            h2: p.context + " / " + p.year.toString()
                        });
                    }}
                    onMouseOut={() => {
                        setHeadings({
                            h1: "Konstantin Lukas",
                            h2: "Full-Stack Developer"
                        });
                    }}
                >
                    <Image
                        src={`/images/projects/${toSnakeCase(p.name)}.webp`}
                        alt={p.name}
                        width={300}
                        height={300}
                        priority
                        draggable={false}
                    />
                </Link>
            </div>
        )
    }), []);

    const projectContRef = useRef<HTMLDivElement>(null);
    const setLastUpdate = useState<number>(Date.now())[1];
    const [animTimeout, setAnimTimeout] = useState<number>(0);
    const [disableAutoScroll, setDisableAutoScroll] = useState(false);
    const disableAutoScrollRef = useRef(false);
    const scrollSpeed = 0.06;

    const scrollProjects = useCallback(() => {
        if (disableAutoScrollRef.current) return;
        setLastUpdate((prev: number) => {
            const now = Date.now();
            const delta = now - prev;
            if (projectContRef.current) {
                checkScrollPos(projectContRef.current, scrollSpeed, delta);
            }
            return now;
        });
        requestAnimationFrame(scrollProjects);
    }, [setLastUpdate, checkScrollPos]);
    useEffect(() => {
        disableAutoScrollRef.current = disableAutoScroll;
        scrollProjects();
    }, [scrollProjects, disableAutoScroll]);
    const [previousTouch, setPreviousTouch] = useState(0);

    const handleUserScroll = (direction: number) => {
        window.clearTimeout(animTimeout);
        setDisableAutoScroll(true);
        const peak = 20;
        for (let i = 0; i <= 20; i++) {
            const value = Math.pow(Math.abs(Math.abs(i - (peak / 2)) - peak / 2),2) / 10;
            setTimeout(function () {
                requestAnimationFrame(() => {
                    if (projectContRef.current) {
                        checkScrollPos(projectContRef.current, scrollSpeed, 20 * value * direction);
                    }
                });
            }, i * 10);
        }
        setAnimTimeout(window.setTimeout(() => {
            setLastUpdate(Date.now());
            setDisableAutoScroll(false);
        }, 1000));
    }


    return (
        <div className={styles["outer-container"]}>
            <div className={styles["inner-container"]}>
                <div className={styles["layout_column"]}>
                    <div
                        ref={projectContRef}
                        className={styles["project_prev_wrapper"]}
                        onWheel={e => {
                            const direction = (e.deltaY > 0) ? 1 : -1;
                            handleUserScroll(direction);
                        }}
                        onTouchMove={(e) => {
                            const direction = window.innerWidth < window.innerHeight
                            ? previousTouch > e.touches[0].clientX ? 1 : -1
                            : previousTouch > e.touches[0].clientY ? 1 : -1;
                            handleUserScroll(direction);
                            setPreviousTouch(window.innerWidth < window.innerHeight ? e.touches[0].clientX : e.touches[0].clientY);
                        }}
                    >
                        {projectHTML}
                        {projectHTML}
                    </div>
                </div>
                <div className={styles["layout_column"]}>
                    <div className={styles["me"]}>
                        <Headings h1={headings.h1} h2={headings.h2}/>
                    </div>
                </div>
                <div className={styles["layout_column"]}>

                </div>
                <div className={styles["layout_column"]}>

                </div>
                <div className={styles["layout_column"]}>
                    <a href="/projekte" className={styles["forward_link"]}>Portfolio</a>
                </div>
            </div>
        </div>

    );
}