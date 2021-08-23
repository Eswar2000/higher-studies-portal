import {Avatar, Chip} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export default function StudentTip({authorName,authorUniversity,tipText,upVotes,downVotes,onVoteCallback}){


    const getUpvoteButtonVariant=()=>{
        // for(const facultyID of post.upvotes){
        //     if(facultyID===sessionStorage.USER_DB_ID){
        //         return "default";
        //     }
        // }
        return "outlined";
    }

    const getDownvoteButtonVariant=()=>{
        // for(const facultyID of post.downvotes){
        //     if(facultyID===sessionStorage.USER_DB_ID){
        //         return "default";
        //     }
        // }
        return "outlined";
    }


    return (
        <div className={"universityTipCard"}>
            <div className={'tipAuthorRow'}>
                <Avatar sizes={'small'}><b>A</b></Avatar>
                <p className={'tipAuthorText'}>{authorName}</p>
            </div>
            <p className={'tipAuthorUniversity'}>{authorUniversity}</p>
            <p className={'universityTip'}>{tipText}</p>
            <div className={'voteReaction'}>
                <Chip icon={<ThumbUpIcon/>} className={'upVoteButton'} label={upVotes} clickable color="primary" onClick={()=>{}} variant={getUpvoteButtonVariant()}/>
                <Chip icon={<ThumbDownIcon/>} className={'downVoteButton'} label={downVotes} clickable color="secondary" onClick={()=>{}} variant={getDownvoteButtonVariant()}/>
            </div>
        </div>
    );
}