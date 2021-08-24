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




export default function CollegeInfoRow ({clgName, clgLocation, clgFee, clgAcceptance, clgMinMarks, languageMarks}) {
    return (
        <div id="collegeRow">
            <div id="collegeAvatarRow">
                <Avatar className={GetRandomAvatarColor('ascii',clgName)} id="collegeAvatar"><b>{clgName[0]}</b></Avatar>
            </div>
            <div id="collegeInfoRow">
                <dl>
                    <dt><SchoolIcon className="listIcon"/></dt>
                    <dd>{clgName}</dd>
                    <dt><RoomIcon className="listIcon"/></dt>
                    <dd>{clgLocation}</dd>
                    <dt><MonetizationOnIcon className="listIcon"/></dt>
                    <dd>{clgFee}</dd>
                </dl>
            </div>
            <div id="collegeAcceptanceRow">
                <dl>
                    <dt><ThumbUpIcon className="listIcon"/></dt>
                    <dd>{clgAcceptance}% Acceptance</dd>
                    <dt><ScoreIcon className="listIcon"/></dt>
                    <dd>Min GRE Marks - {clgMinMarks}</dd>
                    <dt><TranslateIcon className="listIcon"/></dt>
                    <dd>Min TOEFL Marks - {languageMarks}</dd>
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