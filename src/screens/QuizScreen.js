import QuizOptionRow from "../components/QuizOptionRow";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import QuizThink from '../assets/QuizThink.svg';
import {amber, green} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    amber: {
      color: theme.palette.getContrastText(amber[500]),
      backgroundColor: amber[500],
    },
    green: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
      },
  }));


export default function QuizScreen() {
    const classes = useStyles();

    return (
        <div className="quizRow">
            <div id="quizQuestionCol">
                <p id="quizQuestion">Who was the director of the film "TENET"?</p>
                <QuizOptionRow quizOptionType={'A'} quizOptionText={"Christopher Nolan"} quizAvatarColor={classes.green}/>
                <QuizOptionRow quizOptionType={'B'} quizOptionText={"J K Rowling"} quizAvatarColor={classes.amber}/>
                <QuizOptionRow quizOptionType={'C'} quizOptionText={"James Cameron"} quizAvatarColor={classes.amber}/>
                <QuizOptionRow quizOptionType={'D'} quizOptionText={"Quentin Tarantino"} quizAvatarColor={classes.amber}/>
                <div id="quizNavContainer">
                    <Button variant="contained" color="secondary" className="quizNavPrev" startIcon={<ArrowBackIcon />}>Prev</Button>
                    <Button variant="contained" color="secondary" className="quizNavNext" endIcon={<ArrowForwardIcon />}>Next</Button>
                </div>
            </div>
            <div id="quizOverviewCol">
                <div>
                    <img id="quizBanner" src={QuizThink} width="370" alt="QuizBanner"/>
                </div>
                <div id="quizOverview">
                    <p>Total Number Of Questions: 10</p>
                    <p>Total Questions Attended : 8</p>
                    <p>Total Correct Questions: 6</p>
                    <p>Current Accuracy: 75%</p>
                </div>
            </div>
        </div>
    )
}