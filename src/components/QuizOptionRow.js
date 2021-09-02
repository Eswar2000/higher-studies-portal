import Avatar from '@material-ui/core/Avatar';

export default function QuizOptionRow({quizOptionType,quizOptionText,quizAvatarColor}) {

    return (
        <div className="quizOptionCard">
            <Avatar className={quizAvatarColor} id="quizOptionAvatar"><b>{quizOptionType}</b></Avatar>
            <p id="quizOption">{quizOptionText}</p>
        </div>
    );
}