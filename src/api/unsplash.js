import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 517af22f0e58a5d1cd2a3d4081d5e7233851a5eee538c8c04f8902179fd6fa9c'
    }
});