import {useState, useEffect} from "react";
import CollegeInfoRow from "../components/CollegeInfoRow";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import backendService from "../services/backendService";


export default function CollegePredictorScreen() {

    const [examMarks,setExamMarks]=useState(290);
    const [litMarks,setLitMarks]=useState(112);
    const [universities, setUniversities]=useState([]);
    const [eligibleUniversities, setEligibleUniversities]=useState([]);
    const [score, setScore]=useState([]);

    const fetchScores=async ()=>{
        let streamResponse = await backendService("GET","/profile?attribute=examStream",null,sessionStorage.username,sessionStorage.passwordHash);
        let examMarkResponse = await backendService("GET","/profile?attribute=examMarks",null,sessionStorage.username,sessionStorage.passwordHash);
        let litMarkResponse = await backendService("GET","/profile?attribute=TOEFLMarks",null,sessionStorage.username,sessionStorage.passwordHash);
        streamResponse = streamResponse.response;
        examMarkResponse = examMarkResponse.response;
        litMarkResponse = litMarkResponse.response;
        let tempScores = {
            examStream: streamResponse.attributeValue._text,
            examMarks: examMarkResponse.attributeValue._text,
            litMark: litMarkResponse.attributeValue._text
        };
        setScore(tempScores);
        console.log(score);
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
                uniMinGREMarks:response.university[i].minGREMarks._text,
                uniMinTOEFLMarks:response.university[i].minTOEFLMarks._text,
                uniAcceptanceRate:response.university[i].acceptanceRate._text
            };
            tempUniversity.push(uni);
        }

        setUniversities(tempUniversity);
        // console.log(universities);
    }

    useEffect(()=>{
        fetchUniversities();
    },[]);

    return (
        <div id="subScreenCard">
            <div  id="cpScoreCard">
                <div class="cpScoreCol">
                    <Avatar id="examAvatar" variant="rounded"><b>GRE</b></Avatar>
                </div>
                <div class="cpScoreCol">
                    <h2>Your GRE Marks is {examMarks}</h2>
                    <input type="range" min="260" max="340" defaultValue={examMarks} onChange={e => setExamMarks(e.target.value)} class="markSlider"/>
                </div>
            </div>

            <div  id="cpScoreCard">
                <div class="cpScoreCol">
                    <Avatar id="examAvatar" variant="rounded"><b>TOEFL</b></Avatar>
                </div>
                <div class="cpScoreCol">
                    <h2>Your TOEFL Marks is {litMarks}</h2>
                    <input type="range" min="0" max="120" defaultValue={litMarks} onChange={e => setLitMarks(e.target.value)} class="markSlider"/>
                </div>
            </div>

            <Box height={8}/>
            <CollegeInfoRow clgName={"Stanford University"} clgLocation={"California"} clgFee={"$ 75,898"} clgAcceptance={2} clgMinMarks={321} languageMarks={111}/>
            <Box height={8}/>
            <CollegeInfoRow clgName={"Oxford University"} clgLocation={"England"} clgFee={"$ 75,000"} clgAcceptance={25} clgMinMarks={301} languageMarks={119}/>
            <Box height={8}/>
            <CollegeInfoRow clgName={"Harvard University"} clgLocation={"Massachusetts"} clgFee={"$ 67,000"} clgAcceptance={5} clgMinMarks={333} languageMarks={100}/>
            <Box height={8}/>
            <CollegeInfoRow clgName={"Amrita University"} clgLocation={"Coimbatore"} clgFee={"$ 1,000"} clgAcceptance={75} clgMinMarks={265} languageMarks={90}/>
        </div>
    );
}