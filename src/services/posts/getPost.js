import { API_URL } from '../settings';

export default function getPost(id){

    return fetch(`${API_URL}/articles/${id}`).then(res => res.json())
}