import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function CustomModal(props) {
    const useStyles = makeStyles({
        align: {
            float: props.align,
            margin: "20px auto"
        }
    })

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary" size="large" className={classes.align} onClick={() => handleOpen()}>{props.buttonText}</Button>
            <Dialog
                open={open}
                onClose={handleOpen}
            >
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{props.desc}</DialogContentText>
                    {props.form}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpen} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}