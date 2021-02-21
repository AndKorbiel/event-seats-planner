import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Component } from 'react';
import { connect } from 'react-redux';

class GuestInput extends Component {
    state = {
        firstName: '',
        category: '',
        firstNameError: false
    }

    handleChange = (e) => {
        let value = e.target.value;

        this.setState({
            firstName: value
        })
    }

    vaildateInputs = () => {
        let value = false
        if (!this.state.firstName) {
            value = true
        }

        this.setState({
            firstNameError: value
        })
    }

    render() {
        return (
            <div className="user-input-group" >
                <form autoComplete="off">
                    <TextField
                        required
                        error={this.state.firstNameError}
                        id="outlined-basic"
                        label="Name"
                        value={this.state.firstName}
                        onChange={e => this.handleChange(e)}
                        helperText={this.state.firstNameError ? 'Error' : ''}
                        variant="outlined"
                    />
                    <TextField id="outlined-basic" label="Category" variant="outlined" />
                    <Button variant="outlined" color="primary" size="large" onClick={() => this.vaildateInputs()}>
                        Add new guest
                    </Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewUser: user => { dispatch(addNewUser(user)) }
    }
}

export default GuestInput = connect(null, mapDispatchToProps)(GuestInput);