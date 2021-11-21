import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
    IconButton
} from "@material-ui/core";
import {useState} from "react";
import EditIcon from '@material-ui/icons/Edit';
import CustomInput from "./CustomInput";
import DoneIcon from '@material-ui/icons/Done';
import CustomSelect from "./CustomSelect";


export default function ProfileInfoRow({fieldUIName,fieldName,fieldType="textField",fieldValue,selectOptions,showEditButton=true,fieldOnChange,onSubmit}){
    const [editEnabled,setEditEnabled]=useState(false);

    const handleEditButtonOnClick=async ()=>{
        if(editEnabled){
            await onSubmit(fieldName,fieldValue);
            setEditEnabled(false);
        }else{
            setEditEnabled(true);
        }
    }

    return (
        <Grid container>
            <Box item flex={1}>
                <span className="profileEditCategory">{fieldUIName}</span>
            </Box>
            <Box item flex={2}>
                {fieldType==='textField' && <CustomInput value={fieldValue} disabled={!editEnabled} onChange={fieldOnChange}/>}
                {fieldType==='select' && <CustomSelect disabled={!editEnabled} value={fieldValue} options={selectOptions} onChange={fieldOnChange}/>}
                {/*<span className="profileEditResponse">{fieldValue}</span>*/}
            </Box>
            {showEditButton && <Box item flex={1}>
                <IconButton onClick={handleEditButtonOnClick}>
                    {!editEnabled && <EditIcon color={'secondary'}/>}
                    {editEnabled && <DoneIcon color={'secondary'}/>}
                </IconButton>
            </Box>}
        </Grid>
    );
}