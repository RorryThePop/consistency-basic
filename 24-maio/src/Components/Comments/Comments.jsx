import cls from './Comments.module.css'

function Comments () {
    return (
        <div className={cls.comments}>
            <div className={cls.comment}>
                <strong>Author: </strong>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod temporibus ullam in commodi ipsa dignissimos corrupti tenetur quam exercitationem!</p>
            </div>
            <div className={cls.comment}>
                <strong>Author: </strong>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod temporibus ullam in commodi ipsa dignissimos corrupti tenetur quam exercitationem!</p>
            </div>
            <div className={cls.comment}>
                <strong>Author: </strong>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod temporibus ullam in commodi ipsa dignissimos corrupti tenetur quam exercitationem!</p>
            </div>
        </div>
    )
}

export default Comments;