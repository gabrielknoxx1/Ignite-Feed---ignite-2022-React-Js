import styles from "./styles.module.css";
import IgniteLogo from "../../assets/Ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
