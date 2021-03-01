import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function GuestInputMultiline(props) {
    return (
        <div className="user-input-group">
            <h2>Please enter guests names - one per each line</h2>
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
                />
                <Button variant="outlined" color="primary" size="large" onClick={() => props.triggerAddGuestList()}>
                    Add new guests
                </Button>
            </form>
        </div>
    )
}