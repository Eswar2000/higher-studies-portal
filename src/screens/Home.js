import PieChart from "../components/PieChart";
import HomeCard from "../components/HomeCard";
import {Box, CircularProgress} from "@material-ui/core";
import {useEffect, useState} from "react";
import backendService from "../services/backendService";

export default function Home(){

    const [studentProfile,setStudentProfile]=useState();
    const [fetchedAll,setFetchedAll]=useState(false);
    const [bookmarks,setBookmarks]=useState([]);

    const [allResources,setAllResources]=useState([]);


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

        await fetchAllResources();
        await fetchBookmarks();

        setFetchedAll(true);

    }

    const fetchAllResources = async() => {

        let response = await backendService("GET", "/resource?author=all", null, sessionStorage.username, sessionStorage.passwordHash);
        let receivedStatusCode = response.statusCode;
        response = response.response;

        let tempResource = [];

        if(typeof response.resource!=="undefined"){
            if(typeof response.resource.length==="undefined"){
                tempResource.push({
                    resourceID: response.resource.resourceID._text,
                    name: response.resource.resourceName._text,
                    author: response.resource.author._text,
                    coverURL: response.resource.coverURL._text,
                    storageLocation: response.resource.storageLocation._text
                });
            }else{
                for(let i=0; i<response.resource.length; i++) {
                    let resource = {
                        resourceID: response.resource[i].resourceID._text,
                        name: response.resource[i].resourceName._text,
                        author: response.resource[i].author._text,
                        coverURL: response.resource[i].coverURL._text,
                        storageLocation: response.resource[i].storageLocation._text
                    }
                    tempResource.push(resource);
                }
            }
        }
        // console.log(tempResource);

        setAllResources(tempResource);
    }

    const fetchBookmarks=async ()=>{
        let response2 = await backendService("GET", "/bookmark", null, sessionStorage.username, sessionStorage.passwordHash);
        // let receivedStatusCode2 = response2.statusCode;
        response2 = response2.response;

        let tempBookmark = [];

        if(typeof response2.resourceName!=="undefined"){
            if(typeof response2.resourceName.length === "undefined"){
                tempBookmark.push(response2.resourceName._text)
            }else{
                for(let i=0; i<response2.resourceName.length; i++) {
                    tempBookmark.push(response2.resourceName[i]._text);
                }
            }
        }
        // console.log(tempBookmark);
        setBookmarks(tempBookmark);
    }

    const getBookmarkedResources=()=>{
        let bookmarkedResources=[];
        for(let i=0;i<bookmarks.length;i++){
            for(let j=0;j<allResources.length;j++){
                if(bookmarks[i]===allResources[j].resourceID){
                    bookmarkedResources.push(allResources[j]);
                }
            }
        }
        return bookmarkedResources;
    }

    useEffect(()=>{
        getStudentDetails();
    },[]);


    return (
        <div className="homeCard">
            <div className="homeLeftCol">
                {!fetchedAll && <CircularProgress className={"loadingProgressBar"} size={24} color="secondary"/>}
                {fetchedAll && <HomeCard studentProfile={studentProfile} bookmarkedResources={getBookmarkedResources()}/>}
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