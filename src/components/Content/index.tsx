import { ReactNode } from "react";
import styles from "./styles.module.css";

export interface ContentProps {
  children: ReactNode;
}
export function Content({ children }: ContentProps) {
  return <main className={styles.content}>{children}</main>;
}
