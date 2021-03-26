import { Component } from 'react';
import { connect } from 'react-redux';
import { addNewGuestRequest, addNewGuestsListRequest, searchGuestsRequest } from '../redux/actions'
import GuestInput from './Guest-input'
import GuestInputMultiline from './Guest-input-mulitline'
import CustomModal from './CustomModal'
import CategoryDropdown from './Guest-category-dropdown';

class GuestInputController extends Component {
    state = {
        guestName: '',
        category: '',
        showGuestNameError: false,
        showGuestListError: false,
        showSearchError: false,
        guestsListArray: [],
        searchValue: '',
        selectedCategory: ''
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let { guestName, category, searchValue, selectedCategory } = this.state;

        switch (name) {
            case 'Guest name':
                guestName = value;
                break;
            case 'Category':
                category = value;
                break;
            case 'Search':
                searchValue = value;
                break;
            case 'SelectCategory':
                selectedCategory = value;
                break;
            default:
                break;
        }

        this.setState({
            guestName,
            category,
            searchValue,
            selectedCategory
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

    triggerSearch = () => {
        // const validateError = this.vaildateInputs(this.state.searchValue, 'showSearchError');
        this.props.searchGuests(this.state.searchValue)
    }

    categoryList = () => {
        const categoryList = [];

        this.props.guestsList.map(el => {
            if (categoryList.indexOf(el.category) < 0 && el.category !== '') {
                categoryList.push(el.category)
            }
        })

        return categoryList
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
                            value={this.state.guestName}
                            category={this.state.category}
                            showError={this.state.showGuestNameError}
                            label="Guest name"
                            name="Guest name"
                            labelcategory="Category"
                            namecategory="Category"
                            handleChange={this.handleChange}
                            vaildateInputs={this.vaildateInputs}
                            triggerSubmit={this.triggerAddNewGuest}
                            displayCategory={true}
                            buttonText="Add new guest"
                            required={true}
                        />
                    }
                />
                <GuestInput
                    value={this.state.searchValue}
                    showError={this.state.showSearchError}
                    label="Enter guest name..."
                    name="Search"
                    handleChange={this.handleChange}
                    vaildateInputs={this.vaildateInputs}
                    triggerSubmit={this.triggerSearch}
                    displayCategory={false}
                    buttonText="Search"
                    required={false}
                    align="center"
                />
                <CategoryDropdown
                    list={this.categoryList()}
                    value={this.state.selectedCategory}
                    handleChange={this.handleChange}
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

const mapStateToProps = state => {
    return {
        guestsList: state.guestsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewGuest: guest => { dispatch(addNewGuestRequest(guest)) },
        addGuestsList: guestsList => { dispatch(addNewGuestsListRequest(guestsList)) },
        searchGuests: guest => { dispatch(searchGuestsRequest(guest)) },
    }
}

export default GuestInputController = connect(mapStateToProps, mapDispatchToProps)(GuestInputController);