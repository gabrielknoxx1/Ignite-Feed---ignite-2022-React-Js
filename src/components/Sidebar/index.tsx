import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

const cover_image_url =
  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=40";

const avatar_image_url = "https://github.com/gabrielknoxx1.png";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={cover_image_url} alt="Cover image" className={styles.cover} />

      <div className={styles.profile}>
        <Avatar hasBorder src={avatar_image_url} />

        <strong>Gabriel Knoxx</strong>
        <span>Front end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
