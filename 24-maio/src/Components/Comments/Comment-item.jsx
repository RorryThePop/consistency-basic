import cls from "./Comments.module.css";
import profileLogo from "../../assets/user.svg";
function CommentItem(props) {
  const { author, commentBody, onHandleClick } = props;
  return (
    <div className={cls.comment}>
        <div className={cls.delete} onClick={onHandleClick}>X</div>
      <div className={cls.comment__top}>
        <img src={profileLogo} alt="user profile" />
        <strong>{author} </strong>
      </div>
      <p>{commentBody}</p>
    </div>
  );
}

export default CommentItem;
