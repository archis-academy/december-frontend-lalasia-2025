import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";
import Footer from "@/components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className={styles.mainlayout}>
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}

