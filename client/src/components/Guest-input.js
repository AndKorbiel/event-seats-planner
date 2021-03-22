import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function GuestInput(props) {
    return (
        <div className="user-input-group custom-input-wrapper">
            <form autoComplete="off">
                <TextField
                    required={props.required}
                    error={props.showGuestNameError}
                    className="outlined-basic"
                    label={props.label}
                    name={props.name}
                    value={props.guestName}
                    onChange={e => props.handleChange(e)}
                    helperText={props.showGuestNameError ? 'This field is required' : ''}
                    variant="outlined"
                />
                {props.displayCategory && (
                    <TextField
                        className="outlined-basic"
                        labelcategory={props.labelCat}
                        namecategory={props.nameCat}
                        variant="outlined"
                        value={props.category}
                        onChange={e => props.handleChange(e)}
                    />
                )}
                <Button variant="contained" color="primary" size="large" onClick={() => props.triggerAddNewGuest()}>
                    {props.buttonText}
                </Button>
            </form>
        </div>
    )
}