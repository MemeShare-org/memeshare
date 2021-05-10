import API from '../api/api';
import { toast } from 'react-toastify';

const signin = ({ values, resetForm }) => {
    API.post(`/user/signin`, values)
        .then(res => {
            if (res.data.message === "Auth successful") {
                resetForm();
                localStorage.setItem('token', res.data.token);
                window.location.href = '/home';
            }
        })
        .catch(err => {
            if(err.response.data.message === "Account is not verified!")
            toast.error('Your account is not verified!')
            else
            toast.error('The account username or password is incorrect.')
           
            // 
        });
};

export default signin;