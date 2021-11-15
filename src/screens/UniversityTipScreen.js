import StudentTip from "../components/StudentTip";
import CreateStudentTipCard from "../components/CreateStudentTipCard";
import {useEffect, useState} from "react";
import backendService from "../services/backendService";

// eslint-disable-next-line
export default function UniversityTipScreen({}){

    const [posts,setPosts]=useState([]);
    const [statusCode,setStatusCode]=useState(0);

    const [tipText,setTipText]=useState("");

    const handleTipTextChange=(e)=>{
        setTipText(e.target.value);
    }

    const fetchPosts=async ()=>{

        let response=await backendService("GET","/forum",null,sessionStorage.username,sessionStorage.passwordHash);

        let receivedStatusCode=response.statusCode;

        response=response.response;

        let tempPost=[];

        for(let i=0;i<response.post.length;i++){
            let post={
                postID:response.post[i].postID._text,
                postAuthorName:response.post[i].postAuthorName._text,
                postAuthorUniversity:response.post[i].postAuthorUniversity._text,
                postDateTime:response.post[i].postDateTime._text,
                postText:response.post[i].postText._text,
            };

            let upVoteList=[];
            let downVoteList=[];

            try{
                for(let j=0;j<response.post[i].reactions.upVoteID.length;j++){
                    upVoteList.push(response.post[i].reactions.upVoteID[j]._text);
                }
                if(typeof response.post[i].reactions.upVoteID.length === "undefined"){
                    upVoteList.push(response.post[i].reactions.upVoteID._text);
                }
            }catch(e){
                post.upVoteList=[];
            }

            try{
                for(let j=0;j<response.post[i].reactions.downVoteID.length;j++){
                    downVoteList.push(response.post[i].reactions.downVoteID[j]._text);
                }
                if(typeof response.post[i].reactions.downVoteID.length === "undefined"){
                    downVoteList.push(response.post[i].reactions.downVoteID._text);
                }
            }catch(e){
                post.downVoteList=[];
            }

            post.upVoteList=upVoteList;
            post.downVoteList=downVoteList;

            tempPost.push(post);
        }
        console.log(tempPost);
        tempPost.sort((a,b)=>{
            return Date.parse(b.postDateTime)-Date.parse(a.postDateTime);
        });

        setPosts(tempPost);

        setStatusCode(receivedStatusCode);
    }

    const postNewPost=async ()=>{
        let result=await backendService("POST","/forum",{postText:tipText},sessionStorage.username,sessionStorage.passwordHash);

        if(result.statusCode===200){
            fetchPosts();
            setTipText("");
        }else{
            alert("Error occurred");
        }

    }

    const handleVote=async (postID,voteType)=>{
        let reqBody={
            postID:postID,
            reactionType:voteType
        };
        let result=await backendService("PUT","/forum",reqBody,sessionStorage.username,sessionStorage.passwordHash);

        if(result.statusCode===200){
            fetchPosts();
        }else{
            alert("Something went wrong");
        }

    }

    useEffect(()=>{
        fetchPosts();
    },[]);


    const getPostsCard=()=>{
        return (
            <div>
                {posts.map((item,index)=>(
                    <StudentTip key={index} post={item} onVoteCallback={handleVote}/>
                ))}
            </div>
        );
    }

    return (
        <div className={'tipScreenColumn'}>
            <div>
                <CreateStudentTipCard tipText={tipText} handleTipTextChange={handleTipTextChange} onSubmit={postNewPost}/>
                {statusCode===200 && getPostsCard()}
            </div>
        </div>
    );
}