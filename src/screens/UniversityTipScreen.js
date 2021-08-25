import StudentTip from "../components/StudentTip";
import CreateStudentTipCard from "../components/CreateStudentTipCard";

// eslint-disable-next-line
export default function UniversityTipScreen({}){


    return (
        <div className={'tipScreenColumn'}>
            <div>
                <CreateStudentTipCard/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita Vishwa Vidyapeetham'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita Vishwa Vidyapeetham'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita Vishwa Vidyapeetham'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita Vishwa Vidyapeetham'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
            </div>
        </div>
    );
}