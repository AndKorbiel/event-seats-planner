import { Component } from 'react';
import { connect } from 'react-redux';
import { removeDataFromStoreRequest } from '../redux/actions'
import GuestList from './Guest-list';

class GuestListController extends Component {
    state = {
        editedGuest: {
            name: '',
            category: '',
            _id: '',
            showGuestNameError: false,
        },
        isEditing: false
    }

    handleEdit = (guest) => {
        console.log(guest)
        this.setState({
            editedGuest: guest,
            isEditing: true
        })
    }

    handleChange = (e) => {
        const targetName = e.target.name;
        const value = e.target.value;

        console.log(this.state.editedGuest)

        let { name, category, _id } = this.state.editedGuest;
        console.log(name, category)


        if (targetName === 'Guest name') {
            name = value;
        } else {
            category = value;
        }
        console.log(name, category)

        this.setState({
            editedGuest: {
                name,
                category,
                _id,
                showGuestNameError: false,
            },
        })
    }

    render() {
        return (
            <div>
                <GuestList
                    guestsList={this.props.guestsList}
                    isEditing={this.state.isEditing}
                    editedGuest={this.state.editedGuest}
                    handleEdit={this.handleEdit}
                    handleChange={this.handleChange}
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
        removeGuestFromList: id => {
            dispatch(removeDataFromStoreRequest(id))
        }
    }
}

export default GuestListController = connect(mapStateToProps, mapDispatchToProps)(GuestListController)