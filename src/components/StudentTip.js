import {Avatar, Chip} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import GetRandomAvatarColor from "../styleComponents/GetRandomAvatarColor";


export default function StudentTip({post,onVoteCallback}){



    const getUpvoteButtonVariant=()=>{
        for(const username of post.upVoteList){
            if(username===sessionStorage.username){
                return "default";
            }
        }
        return "outlined";
    }

    const getDownvoteButtonVariant=()=>{
        for(const username of post.downVoteList){
            if(username===sessionStorage.username){
                return "default";
            }
        }
        return "outlined";
    }

    const handleUpVote=()=>{
        onVoteCallback(post.postID,"upVote");
    }
    const handleDownVote=()=>{
        onVoteCallback(post.postID,"downVote");
    }

    const getDateTimeString=()=>{
        let date=new Date(Date.parse(post.postDateTime));
        let dateTimeString=`Posted on ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`;
        return dateTimeString;
    }


    return (
        <div className={"universityTipCard"}>
            <div className={'tipAuthorRow'}>
                <Avatar className={GetRandomAvatarColor('ascii',post.postAuthorName)} sizes={'small'}><b>{post.postAuthorName[0]}</b></Avatar>
                <p className={'tipAuthorText'}>{post.postAuthorName}</p>
            </div>
            <p className={'tipAuthorUniversity'}>{post.postAuthorUniversity}</p>
            <p className={'universityTip'}>{post.postText}</p>
            <div className={'voteReaction'}>
                <p className={'postDateTimeText'}>{getDateTimeString()}</p>
                <Chip icon={<ThumbUpIcon/>} className={'upVoteButton'} label={post.upVoteList.length} clickable color="primary" onClick={handleUpVote} variant={getUpvoteButtonVariant()}/>
                <Chip icon={<ThumbDownIcon/>} className={'downVoteButton'} label={post.downVoteList.length} clickable color="secondary" onClick={handleDownVote} variant={getDownvoteButtonVariant()}/>
            </div>
        </div>
    );
}