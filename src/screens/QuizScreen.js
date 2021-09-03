import QuizOptionRow from "../components/QuizOptionRow";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import QuizThink from '../assets/QuizThink.svg';
import {amber, green, red} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    amber: {
      color: theme.palette.getContrastText(amber[500]),
      backgroundColor: amber[500],
    },
    green: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
    },
    red: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
    },
  }));


export default function QuizScreen() {
    const classes = useStyles();

    const [question,setQuestion]=useState("Who was the director of the film \"TENET\"?");
    const [optionsText,setOptionsText]=useState(["Christopher Nolan","J K Rowling","James Cameron","Quentin Tarantino"]);
    const [optionSelected,setOptionSelected]=useState([false,false,false,false]);
    const [correctOptionIndex,setCorrectOptionIndex]=useState(0);

    const onOptionClick=(index)=>{
        let optionSelectedTemp=[];
        for(let i=0;i<optionSelected.length;i++){
            if(i!==index){
                optionSelectedTemp.push(false);
            }else{
                optionSelectedTemp.push(true);
            }
        }
        setOptionSelected(optionSelectedTemp);
    }

    const getOptionColorClass=(index,value)=>{
        if(value && index===correctOptionIndex){
            return classes.green;
        }else if(value && index !==correctOptionIndex){
            return classes.red;
        }
        return classes.amber;
    }

    return (
        <div className="quizRow">
            <div id="quizQuestionCol">
                <p id="quizQuestion">{question}</p>
                {optionSelected.map((value,index)=>(
                    <QuizOptionRow key={index} quizOptionType={String.fromCharCode(65+index)} quizOptionText={optionsText[index]} quizAvatarColor={getOptionColorClass(index,optionSelected[index])} onOptionClick={onOptionClick}/>
                ))}
                <div id="quizNavContainer">
                    <Button variant="contained" color="secondary" className="quizNavPrev" startIcon={<ArrowBackIcon />}>Prev</Button>
                    <Button variant="contained" color="secondary" className="quizNavNext" endIcon={<ArrowForwardIcon />}>Next</Button>
                </div>
            </div>
            <div id="quizOverviewCol">
                <div>
                    <img id="quizBanner" src={QuizThink} width="370" height={'230'} alt="QuizBanner"/>
                </div>
                <div id="quizOverview">
                    <p>Total Number Of Questions: 10</p>
                    <p>Total Questions Attended : 8</p>
                    <p>Total Correct Questions: 6</p>
                    <p>Current Accuracy: 75%</p>
                </div>
            </div>
        </div>
    );
}