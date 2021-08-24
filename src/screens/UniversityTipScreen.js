import StudentTip from "../components/StudentTip";
import CreateStudentTipCard from "../components/CreateStudentTipCard";


export default function UniversityTipScreen({}){





    return (
        <div className={'tipScreenColumn'}>
            <div className={'tipScreenLeftColumn'}>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
                <StudentTip authorName={'Sashank'} authorUniversity={'Amrita School of Engineering'} tipText={"In order to get into this university you need to be able to eat meals while standing upside down"} upVotes={20} downVotes={2} onVoteCallback={()=>{}}/>
            </div>
            <div className={'tipScreenRightColumn'}>
                <CreateStudentTipCard/>
            </div>
        </div>
    );
}