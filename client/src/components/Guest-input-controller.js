import { Component } from 'react';
import { connect } from 'react-redux';
import { addNewGuestRequest, addNewGuestsListRequest } from '../redux/actions'
import GuestInput from './Guest-input'
import GuestInputMultiline from './Guest-input-mulitline'
import CustomModal from './CustomModal'

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

    handleChangeList = e => {
        this.setState({
            guestsListArray: e.target.value
        })
    }

    debounce = (callback, delay) => {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(callback, delay);
        }
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
            this.setState({
                guestName: '',
                category: '',
                showGuestNameError: false,
            })
        }
    }

    triggerAddGuestList = () => {
        let newGuestsArray = [];
        const guestListFormatted = this.state.guestsListArray.split(/\r?\n/)

        guestListFormatted.forEach(guest => {
            if (guest.length >= 1) {
                newGuestsArray.push({
                    name: guest,
                    category: ''
                })
            }
        })

        this.props.addGuestsList(newGuestsArray);
        this.setState({
            guestsListArray: []
        })
    }

    render() {
        return (
            <div>
                <CustomModal
                    buttonText="Add new guest"
                    title="Add new guest"
                    desc="Lorem ipsum description"
                    align="left"
                    form={
                        <GuestInput
                            guestName={this.state.guestName}
                            category={this.state.category}
                            showGuestNameError={this.state.showGuestNameError}
                            handleChange={this.handleChange}
                            vaildateInputs={this.vaildateInputs}
                            triggerAddNewGuest={this.triggerAddNewGuest}
                        />
                    }
                />
                <CustomModal
                    buttonText="Add multiple guests"
                    title="Add multiple guests"
                    desc="Lorem ipsum description"
                    align="right"
                    form={
                        <GuestInputMultiline
                            handleChange={this.handleChangeList}
                            triggerAddGuestList={this.triggerAddGuestList}
                            guestsListArray={this.state.guestsListArray}
                        />
                    }
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewGuest: guest => { dispatch(addNewGuestRequest(guest)) },
        addGuestsList: guestsList => { dispatch(addNewGuestsListRequest(guestsList)) },
    }
}

export default GuestInputController = connect(null, mapDispatchToProps)(GuestInputController);