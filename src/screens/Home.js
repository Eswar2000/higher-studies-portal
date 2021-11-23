import PieChart from "../components/PieChart";
import HomeCard from "../components/HomeCard";
import {Box, CircularProgress} from "@material-ui/core";
import {useEffect, useState} from "react";
import backendService from "../services/backendService";

export default function Home(){

    const [studentProfile,setStudentProfile]=useState();
    const [fetchedAll,setFetchedAll]=useState(false);


    const getStudentDetails= async ()=>{
        let response=await backendService("GET","/profile",null,sessionStorage.username,sessionStorage.passwordHash);


        if(response.statusCode!==200){
            return;
        }

        response=response.response;

        setStudentProfile({
            name:response.studentProfile.name._text,
            city:response.studentProfile.city._text,
            examStream:response.studentProfile.examStream._text,
            examMarks:response.studentProfile.examMarks._text,
            toeflMarks:response.studentProfile.toeflMarks._text
        });

        setFetchedAll(true);

    }

    useEffect(()=>{
        getStudentDetails();
    },[]);


    return (
        <div className="homeCard">
            <div className="homeLeftCol">
                {!fetchedAll && <CircularProgress className={"loadingProgressBar"} size={24} color="secondary"/>}
                {fetchedAll && <HomeCard studentProfile={studentProfile}/>}
            </div>
            {fetchedAll && <div className="homeRightCol">
                <div id="homeRows">
                    <PieChart entryLabels={[`GRE Marks`, 'Missed Marks']} plotLabel={`GRE Marks`}
                              plotData={[studentProfile.examMarks, 340 - studentProfile.examMarks]}
                              plotTitle={`GRE Marks`}/>
                </div>
                <Box height={12}/>
                <div id="homeRows">
                    <PieChart entryLabels={['TOEFL Marks', 'Missed Marks']} plotLabel='TOEFL Marks'
                              plotData={[studentProfile.toeflMarks, 120 - studentProfile.toeflMarks]}
                              plotTitle='TOEFL Marks'/>
                </div>
            </div>}
            
        </div>
    );
}