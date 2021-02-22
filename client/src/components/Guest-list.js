import { connect } from 'react-redux';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.guestList.map((guest, index) => {
                            return (
                                <TableRow key={index + 1}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">{guest.guestName}</TableCell>
                                    <TableCell align="right">{guest.category}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <table>


            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        guestList: state.guestList
    }
}

export default GuestList = connect(mapStateToProps, null)(GuestList)