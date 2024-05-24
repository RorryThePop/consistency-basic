import { useState } from 'react';
import cls from './Comments.module.css'
import CommentItem from './Comment-item';
import CustomButton from '../UI/CustomButton';
import CustomInput from '../UI/CustomInput';



function Comments () {
    const [comment, setComment] = useState([]);
    const [commentValue, setCommentValue] = useState('');


    const handleChange = (event) => {
        const target = event.target
        setCommentValue(target.value)
        console.log(event)
    }

    const createComment = () => {
        const newComment = {
            id: Date.now(),
            author: "John Kowalski",
            commentBody: commentValue
        }
        if(commentValue.length > 0) {
            setComment([...comment, newComment])
        }
        setCommentValue('')
    }
    return (
        <div className={cls.comments}>
            <CustomInput value={commentValue} onHandleChange={handleChange}/>
            <CustomButton text='Send' onHandleClick={createComment}/>
            {
                comment && comment.map(item => (
                    <CommentItem author={item.author} commentBody={item.commentBody} />
                ))
            }
        </div>
    )
}

export default Comments;