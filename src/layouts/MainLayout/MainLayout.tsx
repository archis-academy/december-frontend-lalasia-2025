import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";
import Navbar from "@/components/Navbar/Navbar";

export default function MainLayout() {
    return (
        <div className={styles.mainlayout}>
            <Navbar/>
            <header>Header</header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </div>
    )
}