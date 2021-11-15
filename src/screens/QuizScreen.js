import QuizOptionRow from "../components/QuizOptionRow";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import QuizThink from '../assets/QuizThink.svg';
import {amber, green, red} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from "react";
import backendService from "../services/backendService";

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

    const [questions,setQuestions]=useState([]);
    const [curQuestion,setCurQuestion]=useState(-1);
    const [numCorrectAnswers,setNumCorrectAnswers]=useState(0);



    const getAllQuestions=async ()=>{
        let response=await backendService("GET","/quiz?query=questions",null,sessionStorage.username,sessionStorage.passwordHash);

        console.log(response);

        if(response.statusCode!==200){
            return;
        }
        response=response.response;

        let tempQuestions=[];
        if(typeof response.question.length==="undefined"){
            tempQuestions.push({
                questionText:response.question.questionText._text,
                attended:false
            });
            if(typeof response.question.option.length==="undefined"){
                tempQuestions[0].options=response.question.option._text;
            }
        }
        else{
            for(let i=0;i<response.question.length;i++){
                let optionList=[];
                if(typeof response.question[i].option.length==="undefined"){
                    optionList.push(response.question[i].option._text);
                }else{
                    for(let j=0;j<response.question[i].option.length;j++){
                        optionList.push(response.question[i].option[j]._text);
                    }
                }
                tempQuestions.push({
                    questionText:response.question[i].questionText._text,
                    attended:false,
                    options:optionList
                });
            }
        }
        console.log(tempQuestions);
        setQuestions(tempQuestions);
        setCurQuestion(0);
    }

    const onOptionClick=(index)=>{

    }

    const goToPrevQuestion=()=>{
        if(curQuestion !== 0){
            setCurQuestion(curQuestion-1);
        }
    }

    const goToNextQuestion=()=>{
        if(curQuestion !== questions.length-1){
            setCurQuestion(curQuestion+1);
        }
    }

    const getOptionColorClass=(index,value)=>{
        if(value && index===0){
            return classes.green;
        }else if(value && index !==1){
            return classes.red;
        }
        return classes.amber;
    }

    useEffect(()=>{
        getAllQuestions();
    },[]);

    return (
        <div className="quizRow">
            {curQuestion!==-1 && <div id="quizQuestionCol">
                <p id="quizQuestion">{questions[curQuestion].questionText}</p>
                {questions[curQuestion].options.map((value, index) => (
                    <QuizOptionRow key={index} quizOptionType={String.fromCharCode(65 + index)} quizOptionText={value}
                                   quizAvatarColor={getOptionColorClass(index, value)} onOptionClick={onOptionClick}/>
                ))}
                <div id="quizNavContainer">
                    <Button variant="contained" color="secondary" className="quizNavPrev"
                            startIcon={<ArrowBackIcon/>} onClick={goToPrevQuestion}>Prev</Button>
                    <Button variant="contained" color="secondary" className="quizNavNext"
                            endIcon={<ArrowForwardIcon/>} onClick={goToNextQuestion}>Next</Button>
                </div>
            </div>}
            {curQuestion!==-1 && <div id="quizOverviewCol">
                <div>
                    <img id="quizBanner" src={QuizThink} width="370" height={'230'} alt="QuizBanner"/>
                </div>
                <div id="quizOverview">
                    <p>Total Number Of Questions: {questions.length}</p>
                    <p>Current Question : {curQuestion}</p>
                    <p>Total Correct Questions: {numCorrectAnswers}</p>
                    <p>Current Accuracy: {(numCorrectAnswers / (curQuestion + 1)) * 100}%</p>
                </div>
            </div>}
        </div>
    );
}