import { connect } from 'react-redux';
import { removeDataFromStoreRequest } from '../redux/actions'

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function GuestList(props) {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
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
                                    <TableCell align="right">{guest.name}</TableCell>
                                    <TableCell align="right">{guest.category}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained">Edit</Button>
                                        <Button variant="contained" color="secondary" onClick={() => props.removeGuestFromList(guest._id)}>Remove</Button>
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

const mapStateToProps = state => {
    return {
        guestsList: state.guestsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeGuestFromList: id => {
            dispatch(removeDataFromStoreRequest(id))
        }
    }
}

export default GuestList = connect(mapStateToProps, mapDispatchToProps)(GuestList)