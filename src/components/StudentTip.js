import {Avatar, Chip} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import GetRandomAvatarColor from "../styleComponents/GetRandomAvatarColor";


export default function StudentTip({post,upVotes,downVotes,onVoteCallback}){



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
                <Avatar className={GetRandomAvatarColor('ascii',post.postAuthorName)} sizes={'small'}><b>{post.postAuthorName[0]}</b></Avatar>
                <p className={'tipAuthorText'}>{post.postAuthorName}</p>
            </div>
            <p className={'tipAuthorUniversity'}>{post.postAuthorUniversity}</p>
            <p className={'universityTip'}>{post.postText}</p>
            <div className={'voteReaction'}>
                <Chip icon={<ThumbUpIcon/>} className={'upVoteButton'} label={upVotes} clickable color="primary" onClick={()=>{}} variant={getUpvoteButtonVariant()}/>
                <Chip icon={<ThumbDownIcon/>} className={'downVoteButton'} label={downVotes} clickable color="secondary" onClick={()=>{}} variant={getDownvoteButtonVariant()}/>
            </div>
        </div>
    );
}