import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";

export default function MainLayout() {
    return (
        <div className={styles.mainlayout}>
            <header>Header</header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </div>
    )
}