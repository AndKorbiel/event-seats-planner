// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tableContainer: {
        padding: '15px',
    }
}))

export default function GuestList(props) {
    const guestNameInput = <TextField required className="outlined-basic" label="Guest name" name="Guest name" onChange={e => props.handleChange(e)} value={props.editedGuest.name} variant="outlined" />
    const categoryInput = <TextField className="outlined-basic" label="Category" name="Category" onChange={e => props.handleChange(e)} value={props.editedGuest.category} variant="outlined" />
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <h2>Guest count: {props.guestsList.length}</h2>
                <Table aria-label="simple table" className={classes.tableContainer}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.guestsList.map((guest, index) => {
                            return (
                                <TableRow key={index + 1}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">
                                        {props.isEditing === true && guest._id === props.editedGuest._id ? guestNameInput : guest.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {props.isEditing === true && guest._id === props.editedGuest._id ? categoryInput : guest.category}
                                    </TableCell>
                                    <TableCell align="right">
                                        {(props.isEditing === true && guest._id === props.editedGuest._id) &&
                                            <div>
                                                <Button variant="outlined" onClick={() => props.handleEdit(guest)}>Cancel</Button>
                                                <Button variant="contained" color="secondary" onClick={() => props.handleSave()}>Save</Button>
                                            </div>
                                        }
                                        {props.isEditing === false &&
                                            <div>
                                                <Button variant="outlined" onClick={() => props.handleEdit(guest)}>Edit</Button>
                                                <Button variant="outlined" color="secondary" onClick={() => props.removeGuestFromList(guest._id)}>Remove</Button>
                                            </div>
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}