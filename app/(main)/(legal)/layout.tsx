import {ReactNode} from "react";
import styles from "./layout.module.scss";

export default function Layout({children}: {
    children: ReactNode | ReactNode[]
}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}