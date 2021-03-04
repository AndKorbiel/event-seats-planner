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

export default function GuestList(props) {
    const guestNameInput = <TextField required className="outlined-basic" label="Guest name" name="Guest name" onChange={e => props.handleChange(e)} value={props.editedGuest.name} variant="outlined" />
    const categoryInput = <TextField className="outlined-basic" label="Category" name="Category" onChange={e => props.handleChange(e)} value={props.editedGuest.category} variant="outlined" />

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right"></TableCell>
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
                                                <Button variant="contained" onClick={() => props.handleEdit(guest)}>Cancel</Button>
                                                <Button variant="contained" color="secondary" onClick={() => props.handleSave()}>Save</Button>
                                            </div>
                                        }
                                        {props.isEditing === false &&
                                            <div>
                                                <Button variant="contained" onClick={() => props.handleEdit(guest)}>Edit</Button>
                                                <Button variant="contained" color="secondary" onClick={() => props.removeGuestFromList(guest._id)}>Remove</Button>
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