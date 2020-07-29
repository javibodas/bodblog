import { API_URL } from '../settings';

export default function getPosts(){
    return fetch(`${API_URL}/articles`).then(res => res.json())

}