import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function GuestInput(props) {
    return (
        <div className="user-input-group">
            <form autoComplete="off">
                <TextField
                    required
                    error={props.showGuestNameError}
                    className="outlined-basic"
                    label="Guest name"
                    name="Guest name"
                    value={props.guestName}
                    onChange={e => props.handleChange(e)}
                    helperText={props.showGuestNameError ? 'This field is required' : ''}
                    variant="outlined"
                />
                <TextField
                    className="outlined-basic"
                    label="Category"
                    name="Category"
                    variant="outlined"
                    value={props.category}
                    onChange={e => props.handleChange(e)}
                />
                <Button variant="contained" color="primary" size="large" onClick={() => props.triggerAddNewGuest()}>
                    Add new guest
                </Button>
            </form>
        </div>
    )
}