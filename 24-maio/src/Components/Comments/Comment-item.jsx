import cls from "./Comments.module.css";
import profileLogo from "../../assets/user.svg";
function CommentItem(props) {
  const { author, commentBody } = props;
  return (
    <div className={cls.comment}>
      <div className={cls.comment__top}>
        <img src={profileLogo} alt="user profile" />
        <strong>{author} </strong>
      </div>
      <p>{commentBody}</p>
    </div>
  );
}

export default CommentItem;
