import { API_URL } from '../settings';

export default function getHomeDefaultPost(id){

    return fetch(`${API_URL}/articles/home-default`).then(res => res.json())
}