import API from '../api/api';

const editUser = ({ id, inputValues, closeModal }) => {
    API.patch(`user/${id}`, [
        { "propName": "picture", "value": inputValues.picture },
        { "propName": "username", "value": inputValues.username },
        { "propName": "email", "value": inputValues.email },
        { "propName": "bio", "value": inputValues.bio }
    ])
        .then(() => {
            closeModal();
            window.location.href = '/';
        })
        .catch(err => err)
};

export default editUser;