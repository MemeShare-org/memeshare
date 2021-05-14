import API from '../../api/api';
import { toast } from 'react-toastify';

const signup = ({ values, resetForm }) => {
    API.post(`/user/signup`, values)
        .then(res => {
            resetForm();
            toast.success('Account created! Go check your email.');
            setTimeout(() => {
                window.location.href = `/sign-in`;
            }, 1500);
        })
        .catch(() => toast.error('Account already exist!'))
};

export default signup;