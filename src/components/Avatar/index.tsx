import styles from "./styles.module.css";

export interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false }: AvatarProps) {
  const avatarStyle = hasBorder ? styles.avatarWithBorder : styles.avatar;

  return <img className={avatarStyle} src={src} />;
}
