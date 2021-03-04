import { Component } from 'react';
import { connect } from 'react-redux';
import { removeDataFromStoreRequest, editDataInStoreRequest } from '../redux/actions'
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
        this.setState(prevState => ({
            editedGuest: guest,
            isEditing: !prevState.isEditing
        }))
    }

    handleChange = (e) => {
        const targetName = e.target.name;
        const value = e.target.value;

        let { name, category, _id } = this.state.editedGuest;

        if (targetName === 'Guest name') {
            name = value;
        } else {
            category = value;
        }

        this.setState({
            editedGuest: {
                name,
                category,
                _id,
                showGuestNameError: false,
            },
        })
    }

    handleSave = () => {
        const editedGuest = {
            id: this.state.editedGuest._id,
            name: this.state.editedGuest.name,
            category: this.state.editedGuest.category
        }

        this.props.editGuest(editedGuest);
        this.setState({
            isEditing: false
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
                    handleSave={this.handleSave}
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
        },
        editGuest: guest => {
            dispatch(editDataInStoreRequest(guest))
        }
    }
}

export default GuestListController = connect(mapStateToProps, mapDispatchToProps)(GuestListController)