import {Avatar, Box, Chip, Typography} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import StudentTip from "../components/StudentTip";


export default function UniversityTipScreen({}){





    return (
        <div className={'tipScreenGrid'}>
            <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
            <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
            <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
            <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
        </div>
    );
}