import Avatar from '@material-ui/core/Avatar';

export default function QuizOptionRow({optionIndex,quizOptionType,quizOptionText,quizAvatarColor,onOptionClick}) {

    const onSelect=()=>{
        onOptionClick(optionIndex);
    }

    return (
        <div className="quizOptionCard" onClick={onSelect}>
            <Avatar className={quizAvatarColor} id="quizOptionAvatar"><b>{quizOptionType}</b></Avatar>
            <p id="quizOption">{quizOptionText}</p>
        </div>
    );
}