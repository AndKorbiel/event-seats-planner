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
        showGuestListError: false,
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

    vaildateInputs = (stateValue, errorType) => {
        let value = true
        if (stateValue) {
            value = false
        }

        this.setState({
            [errorType]: value
        })

        return value
    }

    triggerAddNewGuest = () => {
        const validateError = this.vaildateInputs(this.state.guestName, 'showGuestNameError');

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
        const validateError = this.vaildateInputs(this.state.guestsListArray.length > 1, 'showGuestListError')

        if (!validateError) {
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
                guestsListArray: [],
                showGuestListError: false,
            })
        }
    }

    render() {
        return (
            <div className="flex">
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
                            label="Guest name"
                            name="Guest name"
                            handleChange={this.handleChange}
                            vaildateInputs={this.vaildateInputs}
                            triggerAddNewGuest={this.triggerAddNewGuest}
                            displayCategory={true}
                            buttonText="Add new guest"
                            required={true}
                        />
                    }
                />
                <GuestInput
                    guestName={this.state.guestName}
                    category={this.state.category}
                    showGuestNameError={this.state.showGuestNameError}
                    label="Search"
                    name="Search"
                    handleChange={this.handleChange}
                    vaildateInputs={this.vaildateInputs}
                    triggerAddNewGuest={this.triggerAddNewGuest}
                    displayCategory={false}
                    buttonText="Search for a guest"
                    required={false}
                    align="center"
                />
                <CustomModal
                    buttonText="Add multiple guests"
                    title="Add multiple guests"
                    desc="Lorem ipsum description"
                    align="right"
                    form={
                        <GuestInputMultiline
                            handleChange={this.handleChangeList}
                            showGuestNameError={this.state.showGuestListError}
                            labelcategory="Category"
                            namecategory="Category"
                            triggerAddGuestList={this.triggerAddGuestList}
                            guestsListArray={this.state.guestsListArray}
                            displayCategory={true}
                            buttonText="Add new guest"
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