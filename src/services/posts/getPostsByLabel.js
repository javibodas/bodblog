import { API_URL } from '../settings';

export default function getPostsByLabel(strLabel){

    return fetch(`${API_URL}/labels/${strLabel}/articles`).then(res => res.json())
}