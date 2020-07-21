import { API_URL } from '../settings';

export default function getPostComments(id){

    return fetch(`${API_URL}/articles/${id}/comments`).then(res => res.json())
}