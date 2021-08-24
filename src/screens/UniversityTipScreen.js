import StudentTip from "../components/StudentTip";
import CreateStudentTipCard from "../components/CreateStudentTipCard";
import AddIcon from "@material-ui/icons/Add";
import {Fab} from "@material-ui/core";


export default function UniversityTipScreen({}){





    return (
        <div className={'tipScreenColumn'}>
            <div>
                <CreateStudentTipCard/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
            </div>
        </div>
    );
}