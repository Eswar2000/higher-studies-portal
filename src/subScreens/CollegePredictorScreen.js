import {useState} from "react";
import CollegeInfoRow from "../components/CollegeInfoRow";
import Box from "@material-ui/core/Box";
export default function CollegePredictorScreen() {

    const [examMarks,setExamMarks]=useState(290);

    return (
        <div id="subScreenCard">
            <div  id="cpScoreCard">
                <div class="cpScoreCol">
                    <h2>Your Examination</h2>
                    <span id="examinationType">GRE</span>
                </div>
                <div class="cpScoreCol">
                    <h2>Your GRE Marks is {examMarks}</h2>
                    <input type="range" min="260" max="340" defaultValue={examMarks} onChange={e => setExamMarks(e.target.value)} class="markSlider"/>
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