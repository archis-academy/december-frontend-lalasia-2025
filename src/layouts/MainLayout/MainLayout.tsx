import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";

export default function MainLayout() {
  return (
    <div className={styles.mainlayout}>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
