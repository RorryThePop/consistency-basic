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
    return (
        <div className={cls.comments}>
            <CustomButton text='click))' onHandleClick={( )=> console.log('hehe')}/>
            <CustomInput value={commentValue} onHandleChange={handleChange}/>
            {
                comment && comment.map(item => (
                    <CommentItem/>
                ))
            }
        </div>
    )
}

export default Comments;