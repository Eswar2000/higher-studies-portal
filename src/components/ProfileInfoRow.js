import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography
} from "@material-ui/core";
import {useState} from "react";


export default function ProfileInfoRow({fieldName,fieldValue,editAlertOnChange,onSubmit}){
    const [openEditAlert,setOpenEditAlert]=useState(false);

    const handleEditAlertState=(value)=>{
        setOpenEditAlert(value);
    }

    return (
        <Grid container>
            <Box item flex={1}>
                <span className="profileEditCategory">{fieldName}</span>
            </Box>
            <Box item flex={2}>
                <span className="profileEditResponse">{fieldValue}</span>
            </Box>
            <Box item flex={1}>
                <Button variant="contained" size="small" color="secondary" onClick={()=>{
                    handleEditAlertState(true);
                }}>EDIT</Button>
            </Box>
            <Dialog open={openEditAlert} onClose={()=>{handleEditAlertState(false);}} aria-labelledby="form-dialog-title">
                <DialogTitle>
                    <Typography variant="h5" color="secondary">Update {fieldName}</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Edit your ${fieldName} by entering the new value and click the update button`}
                    </DialogContentText>
                    <TextField variant="outlined" value={fieldValue} onChange={editAlertOnChange} color="secondary" label={`New ${fieldName}`} type="text" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{handleEditAlertState(false)}} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={()=>{handleEditAlertState(false)}} color="secondary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}