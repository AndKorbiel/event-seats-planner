import { Component } from 'react';
import { connect } from 'react-redux';
import { addNewGuestRequest, addNewGuestsList } from '../redux/actions'
import GuestInput from './Guest-input'
import GuestInputMultiline from './Guest-input-mulitline'

class GuestInputController extends Component {
    state = {
        guestName: '',
        category: '',
        showGuestNameError: false,
        guestsListArray: []
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let { guestName, category } = this.state;

        if (name === 'Guest name') {
            guestName = value;
        } else {
            category = value;
        }

        this.setState({
            guestName,
            category
        })

        setTimeout(() => {
            this.vaildateInputs()
        }, 10)
    }

    debounce = (callback, delay) => {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(callback, delay);
        }
    }

    handleChangeList = e => {
        if (!this.debouncedFn) {
            this.debouncedFn = this.debounce(() => {
                const value = e.target.value.split(/\r?\n/);
                this.setState({
                    guestsListArray: value
                })
            }, 500);
        }

        this.debouncedFn();
    }

    vaildateInputs = () => {
        let value = true
        if (this.state.guestName) {
            value = false
        }

        this.setState({
            showGuestNameError: value
        })

        return value
    }

    triggerAddNewGuest = () => {
        const validateError = this.vaildateInputs();

        if (!validateError) {
            const guest = {
                name: this.state.guestName,
                category: this.state.category
            }
            this.props.addNewGuest(guest)
        }
    }

    triggerAddGuestList = () => {
        let guestListFormatted = [];
        this.state.guestsListArray.forEach(guest => {
            if (guest.length > 1) {
                guestListFormatted.push({
                    id: '',
                    guestName: guest,
                    category: ''
                })
            }
        })
        console.log(guestListFormatted)
        this.props.addGuestsList(guestListFormatted)
    }

    render() {
        return (
            <div>
                <GuestInput
                    guestName={this.state.guestName}
                    category={this.state.category}
                    showGuestNameError={this.state.showGuestNameError}
                    handleChange={this.handleChange}
                    vaildateInputs={this.vaildateInputs}
                    triggerAddNewGuest={this.triggerAddNewGuest}
                />
                <GuestInputMultiline handleChange={this.handleChangeList} triggerAddGuestList={this.triggerAddGuestList} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewGuest: guest => { dispatch(addNewGuestRequest(guest)) },
        addGuestsList: guestsList => { dispatch(addNewGuestsList(guestsList)) }
    }
}

export default GuestInputController = connect(null, mapDispatchToProps)(GuestInputController);