"use client";

import styles from "./page.module.scss";
import {useEffect, useMemo, useRef, useState} from "react";
import {ProjectBrief, Context} from "@/app/utils/types";
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

function checkScrollPos(ref: HTMLDivElement, scrollSpeed: number, delta: number) {
    const elem = ref.querySelector('div');
    if (elem) {
        if (window.innerWidth > window.innerHeight) {
            const maxScrollPos = getHeight(elem) * 6;
            const scrollPos = ref.scrollTop + scrollSpeed * delta;
            if (scrollPos < 0) {
                ref.scrollTo(0, scrollPos + maxScrollPos);
            } else {
                if (scrollPos >= maxScrollPos) {
                    ref.scrollTo(0, 0);
                } else {
                    ref.scrollTo(0, scrollPos);
                }
            }
        } else {
            const maxScrollPos = getHeight(elem) * 6;
            const scrollPos = ref.scrollLeft + scrollSpeed * delta;
            if (scrollPos < 0) {
                ref.scrollTo(scrollPos + maxScrollPos, 0);
            } else {
                if (scrollPos >= maxScrollPos) {
                    ref.scrollTo(0, 0);
                } else {
                    ref.scrollTo(scrollPos, 0);
                }
            }
        }
    }
}

export default function Page() {
    const projects = useMemo<ProjectBrief[]>(() => ([
        {
            name: "Dakyo",
            year: 2021,
            context: "Hobbyprojekt" as Context
        },{
            name: "Nox",
            year: 2020,
            context: "Ausbildung" as Context
        },{
            name: "Currency Input",
            year: 2021,
            context: "Hobbyprojekt" as Context
        },{
            name: "Oslo",
            year: 2020,
            context: "Hobbyprojekt" as Context
        },{
            name: "Verdicare",
            year: 2023,
            context: "Übungsprojekt" as Context
        },{
            name: "Untitled Ghost Game",
            year: 2023,
            context: "Freizeit & Uni" as Context
        }
    ]), []);

    const [headings, setHeadings] = useState({
        h1: "Konstantin Lukas",
        h2: "Full-Stack Developer"
    })

    const projectHTML = useMemo(() => projects.map((p, i) => {
        const snake = toSnakeCase(p.name);
        return (
            <div className={styles["project_prev"]} key={i}>
                <Link
                    href={"/projekte/" + snake}
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
                        src={`/images/projects/${snake}.webp`}
                        alt={p.name}
                        width={300}
                        height={300}
                        priority
                    />
                </Link>
            </div>
        )
    }), [projects]);

    const projectContRef = useRef<HTMLDivElement>(null);
    const [_, setLastUpdate] = useState<number>(Date.now());
    const [animInterval, setAnimInterval] = useState<number>(0);
    const [animTimeout, setAnimTimeout] = useState<number>(0);
    const scrollSpeed = 0.05;
    const fps = 40;

    const scrollProjects = () => {
        requestAnimationFrame(() => {
            setLastUpdate((prev: number) => {
                const now = Date.now();
                const delta = now - prev;
                if (projectContRef.current) {
                    checkScrollPos(projectContRef.current, scrollSpeed, delta);
                }
                return now;
            });
        })
    };
    useEffect(() => {
        const interval = window.setInterval(scrollProjects, 1000 / fps);
        setAnimInterval(interval);
        return () => window.clearInterval(interval);
    }, [projectContRef]);
    const [previousTouch, setPreviousTouch] = useState(0);

    const handleUserScroll = (direction: number) => {
        window.clearInterval(animInterval);
        window.clearTimeout(animTimeout);
        const peak = 20;
        for (let i = 0; i <= 20; i++) {
            const value = Math.pow(Math.abs(Math.abs(i - (peak / 2)) - peak / 2),2) / 10;
            setTimeout(function () {
                requestAnimationFrame(() => {
                    if (projectContRef.current) {
                        checkScrollPos(projectContRef.current, scrollSpeed, 10 * value * direction);
                    }
                });
            }, i * 10);
        }
        setAnimTimeout(window.setTimeout(() => {
            setLastUpdate(Date.now());
            setAnimInterval(window.setInterval(scrollProjects, 1000 / fps));
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