"use client";

import styles from "./Menu.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";

export default function Menu() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className={styles["menu"] + (open ? " " + styles["open"] : "")}>
            <span className={styles["menu_background"]}></span>
            <nav className={styles["main_nav"]}>
                <div className={styles["important_nav"]}>
                    <Link
                        className={styles["home"] + (pathname === "/" ? " " + styles["current"] : "")}
                        href="/"
                    >
                        home
                    </Link>
                    <Link
                        className={styles["projekte"] + (pathname === "/projekte" ? " " + styles["current"] : "")}
                        href="/projekte"
                    >
                        projekte
                    </Link>
                    <Link
                        className={styles["sprachen"] + (pathname === "/sprachen" ? " " + styles["current"] : "")}
                        href="/sprachen"
                    >
                        sprachen
                    </Link>
                    <Link
                        className={styles["contact"] + (pathname === "/contact" ? " " + styles["current"] : "")}
                        href="/kontakt"
                    >
                        kontakt
                    </Link>
                    <span className={styles["anchor"]}></span>
                </div>
                <div className={styles["footer_nav"]}>
                    <Link className={styles["data"]} href="/datenschutz">datenschutz</Link>
                    <Link className={styles["notice"]} href="/impressum">impressum</Link>
                </div>
            </nav>
            <span
                className={styles["menu_button"]}
                onClick={() => setOpen(!open)}
            >menü.</span>
            <Link className={styles["github"]} href="https://github.com/konstantin-lukas" target="_blank">
                <Image src="/images/github_icon.svg" alt="Mein GitHub Profil" width={40} height={40}
                priority/>
            </Link>
        </header>
    )
}