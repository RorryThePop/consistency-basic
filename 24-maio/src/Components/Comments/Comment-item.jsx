import cls from './Comments.module.css'

function CommentItem() {
    return (
        <div className={cls.comment}>
                <strong>Author: </strong>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod temporibus ullam in commodi ipsa dignissimos corrupti tenetur quam exercitationem!</p>
            </div>
    )
}

export default CommentItem;