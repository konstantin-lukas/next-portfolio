"use client";

import styles from "./page.module.scss";
import {useEffect, useMemo} from "react";
import {projects} from "@/app/utils/data";
import Image from "next/image";
import {toSnakeCase} from "@/app/utils/utils";
import {notFound, usePathname, useRouter} from "next/navigation";
import anime from "animejs";
import Link from "next/link";


let isInViewport = function (elem: HTMLSpanElement | HTMLDivElement) {
    const rect = elem.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
};

let backAnim = function (path: string, target: SVGPolygonElement) {
    anime({
        targets: target,
        points: path,
        easing: 'cubicBezier(0,.5,.56,1.01)',
        duration: 200,
        loop: false,
        complete: function () {
            this.reverse();
        }
    });
};



export default function Page() {
    const router = useRouter();
    const pathSegments = usePathname().split('/');
    if (pathSegments.length > 3)
        notFound();
    const project = decodeURIComponent(pathSegments[2]).replaceAll('-', ' ');

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
                    <div className={styles["project_link"]} role="button" onClick={() => {
                        router.push("/projekte/" + encodeURIComponent(p.name.toLowerCase().replaceAll(' ', '-')));
                    }}>
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
    }, [router]);

    useEffect(() => {
        if (project !== "undefined") {
            document.body.classList.add(styles['hide_scroll_bar_lightbox']);
            document.documentElement.classList.add(styles['hide_scroll_bar_lightbox']);
        } else {
            document.body.classList.remove(styles['hide_scroll_bar_lightbox']);
            document.documentElement.classList.remove(styles['hide_scroll_bar_lightbox']);
        }
    }, [project]);

    const lightBoxes = useMemo(() => {
        return projects.map((p, i) => {
            const show = project === p.name.toLowerCase();
            const work = p.work.map((w, i) => <li key={i}>{w}</li>);
            const tech = p.tech.map((t, i) => <li key={i}>{t}</li>);
            const buttons = p.links.map((l, i) => {
                return (
                    <Link key={i} className={styles["button"] + " " + styles["button_hover"]} target="_blank"
                          href={l.url}><span>{l.text}</span>
                    </Link>
                )
            });
            return (
                <div className={
                    styles["project_lightbox"] + (show ? " " + styles["show"] + " " + styles["enable-events"] : "")
                } key={i}>
                    <div className={styles["project_lightbox_image"]}>
                        <Image
                             src={`/images/projects/${toSnakeCase(p.name)}.webp`}
                             alt={p.name}
                             draggable="false"
                             width={2000}
                             height={2000}
                        />
                        <svg viewBox="0 0 283.5 283.5"
                             role="button"
                             onMouseOver={(e) => {
                                 const target = (e.target as SVGSVGElement).querySelector('polygon');
                                 if (target)
                                     backAnim(
                                         '165.1,115.5 270.4,115.5 270.4,168 165.1,168 165.1,168 112.6,168 112.6,' +
                                         '230 13.1,141.7 13.1,141.7 112.6,53.5 112.6,115.5 165.1,115.5',
                                         target
                                     );
                             }}
                             onMouseLeave={(e) => {
                                 const target = (e.target as SVGSVGElement).querySelector('polygon');
                                 if (target)
                                     backAnim(
                                         '178.9,141.7 271.7,234.5 234.5,271.7 141.7,178.9 48.9,271.7 11.8,234.5 ' +
                                         '104.6,141.7 11.8,48.9 48.9,11.8 141.7,104.6 234.5,11.8 271.7,48.9',
                                         target
                                     );
                             }}
                             onClick={() => {
                                 router.push("/projekte");
                             }}
                        >
                            <polygon className={styles["st0"]}
                                     points="178.9,141.7 271.7,234.5 234.5,271.7 141.7,178.9 48.9,271.7 11.8,234.5 104.6,141.7 11.8,48.9 48.9,11.8 141.7,104.6 234.5,11.8 271.7,48.9"/>
                        </svg>
                        <h2 style={{textTransform: "uppercase"}}>{p.name}</h2>
                    </div>
                    <div className={styles["project_lightbox_content"]} onScroll={(e) => {
                        const container = e.target as HTMLDivElement;
                        const heading = container?.parentElement?.querySelector('h2') as HTMLHeadingElement;
                        if (!heading || !container) return;
                        if (window.innerWidth > 650) {
                            if (container.scrollTop < 10) {
                                heading.style.bottom = "calc(100% - 2.8em)";
                                heading.style.opacity = "1";
                            } else {
                                heading.style.bottom = "calc(100% - 1.8em)";
                                heading.style.opacity = "0";
                            }
                        } else {
                            heading.style.bottom = "0";
                            heading.style.opacity = "1";
                        }
                    }}>
                        <div className={styles["lightbox_content_wrapper"]}>
                            <ul>
                                <li>Kontext</li>
                                <li>{p.context}</li>
                                <li>{p.year}</li>
                            </ul>
                            <ul>
                                <li>Meine Arbeit</li>
                                {work}
                            </ul>
                            <ul>
                                <li>Benutzte Technologien</li>
                                {tech}
                            </ul>
                            <ul>
                                <li>Über das Projekt</li>
                                <li>
                                    {p.about}
                                </li>
                            </ul>
                            {buttons}
                        </div>
                    </div>
                </div>
            )
        })
    }, [router, project]);

    return (
        <div className={styles["main"]}>
            <div className={styles["project_cont"]}>
                <h1 className={"pinkdot " + styles["pinkdot"]}>projekte</h1>
                {projectImages}
            </div>
            <div className={styles["lightbox_container"]}>
                {lightBoxes}
            </div>
        </div>
    );
}