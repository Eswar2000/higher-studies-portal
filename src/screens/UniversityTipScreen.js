import StudentTip from "../components/StudentTip";
import CreateStudentTipCard from "../components/CreateStudentTipCard";
import {useEffect, useState} from "react";
import backendService from "../services/backendService";
import hashString from "../services/hashString";

// eslint-disable-next-line
export default function UniversityTipScreen({}){

    const [posts,setPosts]=useState([]);
    const [statusCode,setStatusCode]=useState(0);

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
                // console.log(response.post[i].reactions.upVoteID[1]._text);
                for(let j=0;j<response.post[i].reactions.upVoteID.length;j++){
                    upVoteList.push(response.post[i].reactions.upVoteID[j]._text);
                }
                post.upVoteList=upVoteList;
            }catch(e){
                try{
                    if(response.post[i].reactions.upVoteID._text){
                        upVoteList.push(response.post[i].reactions.upVoteID._text);
                    }
                }catch (e){
                    post.upVoteList=[];
                }
            }

            tempPost.push(post);
        }

        console.log(tempPost);

        setPosts(tempPost);

        setStatusCode(receivedStatusCode);
    }

    useEffect(()=>{
        fetchPosts();
    },[]);


    const getPostsCard=()=>{

        // let post={
        //     postAuthorName:"Me",
        //     postAuthorUniversity:"Me",
        //     postDateTime:"Me",
        //     postText:"Me",
        // }

        // return (
        //     <div>
        //         <StudentTip post={posts[0]} upVotes={20} downVotes={20} onVoteCallback={()=>{}}></StudentTip>
        //     </div>
        // );

        return (
            <div>
                {posts.map((item,index)=>(
                    <StudentTip post={item} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                ))}
            </div>
        );
    }

    return (
        <div className={'tipScreenColumn'}>
            <div>
                <CreateStudentTipCard/>
                {statusCode===200 && getPostsCard()}
            </div>
        </div>
    );
}