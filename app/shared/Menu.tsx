"use client";

import styles from "./Menu.module.scss";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export default function Menu() {

    const pathname = usePathname();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
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
                        className={styles["projects"] + (pathname.startsWith("/projekte") ? " " + styles["current"] : "")}
                        href={"/projekte"}
                    >
                        projekte
                    </Link>
                    <Link
                        className={styles["sprachen"] + (pathname === "/sprachen" ? " " + styles["current"] : "")}
                        href={"/sprachen"}
                    >
                        sprachen
                    </Link>
                    <Link
                        className={styles["contact"]}
                        href="https://github.com/konstantin-lukas"
                        target="_blank"
                    >
                        github
                    </Link>
                    <span className={styles["anchor"]}></span>
                </div>
                <div className={styles["footer_nav"]}>
                    <Link className={styles["data"]} href={"/datenschutz"}>datenschutz</Link>
                    <Link className={styles["notice"]} href={"/impressum"}>impressum</Link>
                </div>
            </nav>
            <span
                className={styles["menu_button"]}
                onClick={() => setOpen(!open)}
            >menü.</span>
        </header>
    )
}