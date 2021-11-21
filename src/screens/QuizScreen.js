import QuizOptionRow from "../components/QuizOptionRow";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import QuizThink from '../assets/QuizThink.svg';
import StartBanner from '../assets/StartBanner.svg';
import {amber, green, red} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from "react";
import backendService from "../services/backendService";
import {CircularProgress} from "@material-ui/core";



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
    const [maxCurQuestion,setMaxCurQuestion]=useState(-1);
    const [prevQuizStats,setPrevQuizStats]=useState();
    const [curScreen,setCurScreen]=useState(-1);

    const getPrevResults=async ()=>{
        let response = await backendService("GET","/quiz?query=prevResult",null,sessionStorage.username,sessionStorage.passwordHash);

        console.log(response);

        if(response.statusCode!==200){
            return;
        }
        response=response.response;
        if(response.present._text==="False"){
            await getAllQuestions();
            setCurScreen(1);
            return;
        }

        setPrevQuizStats({
            numCorrectQuestions: parseInt(response.curMarks._text),
            questionsAttended: parseInt(response.questionsAttended._text)
        });
        setCurScreen(0)



    }



    const getAllQuestions=async ()=>{
        let response=await backendService("GET","/quiz?query=questions",null,sessionStorage.username,sessionStorage.passwordHash);

        if(response.statusCode!==200){
            return;
        }
        response=response.response;

        let tempQuestions=[];
        if(typeof response.question.length==="undefined"){
            tempQuestions.push({
                questionText:response.question.questionText._text,
                isCorrect:false,
                selectedChoice:-1,
                questionID:response.question.questionID._text
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
                    isCorrect:false,
                    selectedChoice:-1,
                    options:optionList,
                    questionID:response.question[i].questionID._text
                });
            }
        }
        setQuestions(tempQuestions);
        setCurQuestion(0);
        setMaxCurQuestion(0);
    }

    const startQuizButtonOnClick=async ()=>{
        await getAllQuestions();
        setCurScreen(1);
    }

    const onOptionClick=async (index)=>{
        let reqBody = {
            questionID: questions[curQuestion].questionID,
            curAnswer: questions[curQuestion].options[index]
        };
        let response = await backendService("POST","/quiz",reqBody,sessionStorage.username, sessionStorage.passwordHash);
        console.log(response.response);
        response = response.response;
        let tempQuestions = [];
        for(let i=0;i<questions.length;i++){
            if(i===curQuestion){
                questions[i].isCorrect=response.isCorrect._text==="0"?false:true;
                questions[i].selectedChoice=index;
            }
            tempQuestions.push(questions[i]);
        }
        setQuestions(tempQuestions);
    }

    const goToPrevQuestion=()=>{
        if(curQuestion !== 0){
            setCurQuestion(curQuestion-1);
        }
    }

    const goToNextQuestion=()=>{
        let tempCurQuestion=curQuestion;
        if(curQuestion !== questions.length-1){
            setCurQuestion(curQuestion+1);
            if(maxCurQuestion<tempCurQuestion+1){
                setMaxCurQuestion(tempCurQuestion+1);
            }
        }
    }

    const getNumCorrectAnswers=()=>{
        let count=0;
        for(let i=0;i<questions.length;i++){
            if(questions[i].isCorrect){
                count++;
            }
        }
        return count;
    }

    const getOptionColorClass=(index)=>{
        if(questions[curQuestion].selectedChoice===index){
            if(questions[curQuestion].isCorrect){
                return classes.green;
            }
            return classes.red;
        }
        return classes.amber;
    }

    useEffect(()=>{
        getPrevResults();
    },[]);

    const getQuizQuestionsUI=()=>{
        return (
            <div className="quizRow">
                {curQuestion!==-1 && <div id="quizQuestionCol">
                    <p id="quizQuestion">{questions[curQuestion].questionText}</p>
                    {questions[curQuestion].options.map((value, index) => (
                        <QuizOptionRow key={index} optionIndex={index} quizOptionType={String.fromCharCode(65 + index)} quizOptionText={value}
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
                        <p>Current Question : {curQuestion+1}</p>
                        <p>Total Correct Questions: {getNumCorrectAnswers()}</p>
                        <p>Current Accuracy: {((getNumCorrectAnswers() / (maxCurQuestion + 1)) * 100).toFixed(2)}%</p>
                    </div>
                </div>}
            </div>
        );
    }

    const getQuizPrevResultUI=()=>{
        return (
            <div id="quizStartBanner">
                <div className="startLeft">
                    <img src={StartBanner} alt="QuizStartBanner"/>
                </div>
                <div className="startRight">
                    <h2 className="quizHeads">Welcome Back</h2>
                    <p className="quizSubHeads">Your Previous Session Results</p>
                    <p className="quizText">Total Number Of Questions: {prevQuizStats.questionsAttended}</p>
                    <p className="quizText">Total Correct Questions: {prevQuizStats.numCorrectQuestions}</p>
                    <p className="quizText">Your Accuracy: {((prevQuizStats.numCorrectQuestions/prevQuizStats.questionsAttended)*100).toFixed(2)}%</p>
                    <Button variant="contained" color="secondary" onClick={startQuizButtonOnClick}>Start Quiz</Button>
                </div>

            </div>
        );
    }

    return (
        <div>
            {curScreen===-1 && <CircularProgress className={"loadingProgressBar"} size={24} color="secondary"/>}
            {curScreen===0 && getQuizPrevResultUI()}
            {curScreen===1 && getQuizQuestionsUI()}
        </div>

    );
}