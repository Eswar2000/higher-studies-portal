import {useState, useEffect} from "react";
import CollegeInfoRow from "../components/CollegeInfoRow";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import backendService from "../services/backendService";
import Button from "@material-ui/core/Button";

let tempExamMarks = 260;
let tempLitMarks = 0;

export default function CollegePredictorScreen() {

    let [examMarks,setExamMarks]=useState(260);
    let [litMarks,setLitMarks]=useState(0);
    const [universities, setUniversities]=useState([]);
    const [eligibleUniversities, setEligibleUniversities]=useState([]);
    const [examStream, setExamStream]=useState("GRE");

    const fetchScores=async ()=>{
        let streamResponse = await backendService("GET","/profile?attribute=examStream",null,sessionStorage.username,sessionStorage.passwordHash);
        let examMarkResponse = await backendService("GET","/profile?attribute=examMarks",null,sessionStorage.username,sessionStorage.passwordHash);
        let litMarkResponse = await backendService("GET","/profile?attribute=TOEFLMarks",null,sessionStorage.username,sessionStorage.passwordHash);
        streamResponse = streamResponse.response;
        examMarkResponse = examMarkResponse.response;
        litMarkResponse = litMarkResponse.response;
        setExamStream(streamResponse.attributeValue._text);
        examMarkResponse.attributeValue._text!=="null" && (tempExamMarks=parseInt(examMarkResponse.attributeValue._text));
        litMarkResponse.attributeValue._text!=="null" && (tempLitMarks=parseInt(litMarkResponse.attributeValue._text));
    }

    const fetchUniversities=async ()=>{
        let response = await backendService("GET","/university",null,sessionStorage.username,sessionStorage.passwordHash);
        if(response.statusCode!==200){
            return;
        }
        response = response.response;
        // console.log(response);
        let tempUniversity = [];
        
        for(let i=0;i<response.university.length;i++){
            let uni = {
                uniID:response.university[i].id._text,
                uniName:response.university[i].name._text,
                uniLocation:response.university[i].location._text,
                uniTuitionFee:response.university[i].tuitionFee._text,
                uniMinGREMarks:parseInt(response.university[i].minGREMarks._text),
                uniMinTOEFLMarks:parseInt(response.university[i].minTOEFLMarks._text),
                uniAcceptanceRate:response.university[i].acceptanceRate._text,
                uniSiteURL: response.university[i].siteURL._text
            };
            tempUniversity.push(uni);
        }

        setUniversities(tempUniversity);
        await fetchScores();
        showEligibleUniversities(tempUniversity);
    }

    const showEligibleUniversities= (uni)=>{
        let tempUniversity = uni.filter((university)=>{
            return (university.uniMinGREMarks<=tempExamMarks && university.uniMinTOEFLMarks<=tempLitMarks); 
        });
        setExamMarks(tempExamMarks);
        setLitMarks(tempLitMarks);
        setEligibleUniversities(tempUniversity);
    }

    useEffect(()=>{
        fetchUniversities();
    },[]);

    const handleExamMarkChange=(e)=>{
        tempExamMarks = e.target.value;
        setExamMarks(e.target.value);
        showEligibleUniversities(universities);
    }

    const handleLitMarkChange=(e)=>{
        tempLitMarks = e.target.value;
        setLitMarks(e.target.value);
        showEligibleUniversities(universities);
    }

    const handleSetScore=async (fieldName)=>{
        let reqBody={
            fieldName:fieldName,
            fieldValue:fieldName==="examMarks"?tempExamMarks:tempLitMarks
        };
        await backendService("PUT","/profile",reqBody,sessionStorage.username,sessionStorage.passwordHash);
    }

    return (
        <div id="subScreenCard">
            <div  id="cpScoreCard">
                <div class="cpScoreCol">
                    <Avatar id="examAvatar" variant="rounded"><b>{examStream}</b></Avatar>
                </div>
                <div class="cpScoreCol">
                    <h2>Your {examStream} Score is {examMarks}</h2>
                    <input type="range" min="260" max="340" value={examMarks} onChange={handleExamMarkChange} class="markSlider"/>
                </div>
                <div class="cpScoreCol">
                    <Button variant="contained" size="small" color="secondary" onClick={()=>{handleSetScore("examMarks")}}>Set as your score</Button>
                </div>
            </div>
            
            <Box height={8}/>

            <div  id="cpScoreCard">
                <div className="cpScoreCol">
                    <Avatar id="examAvatar" variant="rounded"><b>TOEFL</b></Avatar>
                </div>
                <div className="cpScoreCol">
                    <h2>Your TOEFL Score is {litMarks}</h2>
                    <input type="range" min="0" max="120" value={litMarks} onChange={handleLitMarkChange} class="markSlider"/>
                </div>
                <div className="cpScoreCol">
                    <Button variant="contained" size="small" color="secondary" onClick={()=>{handleSetScore("TOEFLMarks")}}>Set as your score</Button>
                </div>
            </div>

            <Box height={8}/>
            {eligibleUniversities.map((item,index)=>(
                <div>
                    <CollegeInfoRow uniDetails={item}/>
                    <Box height={8}/>
                </div>
            ))}
        </div>
    );
}