"use client";

import styles from "./page.module.scss";
import {useEffect, useMemo} from "react";
import {projects} from "@/app/utils/data";
import Image from "next/image";
import {toSnakeCase} from "@/app/utils/utils";


let isInViewport = function (elem: HTMLSpanElement | HTMLDivElement) {
    const rect = elem.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
};

export default function Page() {

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll("." + styles["project_name"]).forEach((item) => {
                if (isInViewport(item as HTMLSpanElement)) {
                    (item as HTMLSpanElement).style.color = "black";
                    const distanceY = item.getBoundingClientRect().top;
                    if (distanceY < window.innerHeight && distanceY > 0) {
                        let offset = (window.innerHeight - distanceY) / window.innerHeight;
                        offset -= .5;
                        offset *= window.innerHeight / 50;
                        (item as HTMLSpanElement).style.top = 50 - offset + "%";
                    }
                }
            });
            document.querySelectorAll("." + styles["project_link"]).forEach((item) => {
                if (isInViewport(item as HTMLDivElement)) {
                    const image = item.querySelector('img');
                    if (image) {
                        image.style.left = "50%";
                        image.style.opacity = "1";
                    }
                }
            });
        }
        handleScroll();
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    const projectImages = useMemo(() => {
        return projects.map((p, i) => {
            return (
                <div className={styles["project_wide"]} key={i}>
                    <div className={styles["project_link"]}>
                        <Image
                            src={`/images/projects/${toSnakeCase(p.name)}.webp`}
                            width={750}
                            height={750}
                            alt={p.name}
                            draggable="false"
                            priority
                        />
                    </div>
                    <span className={styles["project_name"]}>{p.name}</span>
                </div>
            )
        })
    }, []);

    return (
        <div className={styles["main"]}>
            <div className={styles["project_cont"]}>
                <h1 className={"pinkdot " + styles["pinkdot"]}>projekte</h1>
                {projectImages}
            </div>
            <div className={styles["lightbox_container"]}>

            </div>
        </div>
    );
}