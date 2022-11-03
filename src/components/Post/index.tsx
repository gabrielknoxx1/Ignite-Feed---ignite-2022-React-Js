import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Post as IPost } from "../../Mocks/types";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export interface PostProps {
  content: IPost;
}

export function Post({
  content: {
    author: { avatarUrl, name, role },
    publishedAt,
    content,
  },
}: PostProps) {
  const [comments, setComments] = useState(["Post bem legal 🤩"]);
  const [newComment, setNewComment] = useState("");

  const publishedAtFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  });

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function addNewComment(): void {
    event?.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newComment.length >= 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time title={publishedAtFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) =>
          line.type === "paragraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p key={line.content}>
              <a href="#">{line.content}</a>
            </p>
          )
        )}
      </div>

      <form
        onSubmit={addNewComment}
        action="submit"
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={(event) => {
            event.target.setCustomValidity("");
            setNewComment(event.target.value);
          }}
          required
          onInvalid={(event) =>
            event?.target?.setCustomValidity("Esse campo é obrigatório")
          }
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={() => deleteComment(comment)}
          />
        ))}
      </div>
    </article>
  );
}
