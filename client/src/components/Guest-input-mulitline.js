import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function GuestInputMultiline(props) {
    return (
        <div className="user-input-group multiline">
            <form autoComplete="off">
                <TextField
                    id="outlined-multiline-static"
                    label="Guests list"
                    multiline
                    rows={10}
                    variant="outlined"
                    name="Guests list"
                    value={props.guestsListArray}
                    onChange={e => props.handleChange(e)}
                    error={props.showGuestNameError}
                    helperText={props.showGuestNameError ? 'This field is required' : ''}
                />
                <Button variant="contained" color="primary" size="large" onClick={() => props.triggerAddGuestList()}>
                    Add new guests
                </Button>
            </form>
        </div>
    )
}