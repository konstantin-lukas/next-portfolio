"use client";

import styles from "./page.module.scss";
import {useMemo, useState} from "react";
import {ProjectBrief, Context} from "@/app/utils/types";
import {toSnakeCase} from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import Headings from "./Headings";

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



    return (
        <div className={styles["outer-container"]}>
            <div className={styles["inner-container"]}>
                <div className={styles["layout_column"]}>
                    <div className={
                        `${styles["project_prev_wrapper"]} ${styles["hide_scroll_bar"]} ${styles["Loop"]} ${styles["js-loop"]}}`
                    }>
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