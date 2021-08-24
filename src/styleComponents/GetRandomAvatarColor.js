import {makeStyles} from "@material-ui/core";
import {amber, blue, blueGrey, cyan, deepOrange, lightGreen, lime, orange, teal} from "@material-ui/core/colors";

const useStyles=makeStyles((theme)=>({
    lightGreen:{
        color:theme.palette.getContrastText(lightGreen[500]),
        backgroundColor:lightGreen[500]
    },
    amber:{
        color:theme.palette.getContrastText(amber[500]),
        backgroundColor:amber[500]
    },
    blue:{
        color:theme.palette.getContrastText(blue[500]),
        backgroundColor:blue[500]
    },
    cyan:{
        color:theme.palette.getContrastText(cyan[500]),
        backgroundColor:cyan[500]
    },
    blueGrey:{
        color:theme.palette.getContrastText(blueGrey[500]),
        backgroundColor:blueGrey[500]
    },
    lime:{
        color:theme.palette.getContrastText(lime[500]),
        backgroundColor:lime[500]
    },
    teal:{
        color:theme.palette.getContrastText(teal[500]),
        backgroundColor:teal[500]
    },
    orange:{
        color:theme.palette.getContrastText(orange[500]),
        backgroundColor:orange[500]
    },
    deepOrange:{
        color:theme.palette.getContrastText(deepOrange[500]),
        backgroundColor:deepOrange[500]
    },
}));



export default function GetAvatarColor(type,inputString){
    const colorClasses=[useStyles().lightGreen,useStyles().blue,useStyles().lime,useStyles().amber,useStyles().teal,useStyles().blueGrey,useStyles().cyan,useStyles().orange,useStyles().deepOrange];
    if (type==='random'){
        return colorClasses[Math.floor((Math.random()*8)+1)];
    }else if(type==='ascii'){
        return colorClasses[inputString.charCodeAt(0)%(colorClasses.length)];
    }
}