import axios from 'axios'

export const token = () => {
    const token = localStorage.getItem('token');

    axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://chef-portfolio-webtp6.herokuapp.com/api/posts/'
    });
}