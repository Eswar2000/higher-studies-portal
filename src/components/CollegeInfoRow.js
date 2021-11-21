import Avatar from "@material-ui/core/Avatar";
import RoomIcon from '@material-ui/icons/Room';
import SchoolIcon from '@material-ui/icons/School';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TranslateIcon from '@material-ui/icons/Translate';
import ScoreIcon from '@material-ui/icons/Score';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GetRandomAvatarColor from "../styleComponents/GetRandomAvatarColor";
import {IconButton} from "@material-ui/core";




export default function CollegeInfoRow ({uniDetails}) {
    return (
        <div id="collegeRow">
            <div id="collegeAvatarRow">
                <Avatar className={GetRandomAvatarColor('ascii',uniDetails.uniName)} id="collegeAvatar"><b>{uniDetails.uniName[0]}</b></Avatar>
            </div>
            <div id="collegeInfoRow">
                <dl>
                    <dt><SchoolIcon className="listIcon"/></dt>
                    <dd>{uniDetails.uniName}</dd>
                    <dt><RoomIcon className="listIcon"/></dt>
                    <dd>{uniDetails.uniLocation}</dd>
                    <dt><MonetizationOnIcon className="listIcon"/></dt>
                    <dd>{uniDetails.uniTuitionFee}</dd>
                </dl>
            </div>
            <div id="collegeAcceptanceRow">
                <dl>
                    <dt><ThumbUpIcon className="listIcon"/></dt>
                    <dd>{uniDetails.uniAcceptanceRate}% Acceptance</dd>
                    <dt><ScoreIcon className="listIcon"/></dt>
                    <dd>Min GRE Marks - {uniDetails.uniMinGREMarks}</dd>
                    <dt><TranslateIcon className="listIcon"/></dt>
                    <dd>Min TOEFL Marks - {uniDetails.uniMinTOEFLMarks}</dd>
                </dl>
            </div>
            <div id="collegeRoutingRow">
                <IconButton size={'small'}>
                    <ArrowForwardIcon color={'secondary'}/>
                </IconButton>
            </div>
        </div>
    );
}