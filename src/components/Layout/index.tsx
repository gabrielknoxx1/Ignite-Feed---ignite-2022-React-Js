import { ReactNode } from "react";
import styles from "./styles.module.css";

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
