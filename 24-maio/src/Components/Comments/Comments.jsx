import { useState } from 'react';
import cls from './Comments.module.css'
import CommentItem from './Comment-item';



function Comments () {
    const [comment, setComment] = useState([])
    
    return (
        <div className={cls.comments}>
            {
                comment && comment.map(item => (
                    <CommentItem/>
                ))
            }
        </div>
    )
}

export default Comments;