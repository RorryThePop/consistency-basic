import cls from './CustomElem.module.css'


function CustomButton (props) {
    const {text,onHandleClick} = props
    return (
        <button className={cls.btn} onClick={onHandleClick}> {text}</button>
    )
}

export default CustomButton;