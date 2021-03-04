import axios from "axios";

const fetchGuest = () => {
    return axios.get('/guests-list/getAll')
        .then(response => response.data)
        .catch(err => console.log(err))
}

const postGuest = newGuest => {
    return axios.post('/guests-list/add', newGuest)
        .then(response => response.data)
        .catch(err => console.log(err))
}

const postGuestsList = guestsList => {
    return axios.post('/guests-list/addList', guestsList)
        .then(response => response.data)
        .catch(err => console.log(err))
}

const removeGuest = id => {
    return axios.post('/guests-list/delete', { data: id })
        .then(response => response.data)
        .catch(err => console.log(err))
}

const editGuest = guest => {
    return axios.post('/guests-list/edit', {data: guest})
        .then(response => response.data)
        .catch(err => console.log(err))
}

export const api = { fetchGuest, postGuest, removeGuest, postGuestsList, editGuest }