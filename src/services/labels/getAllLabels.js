import { API_URL } from '../settings';

export default function getAllLabels(){

    return fetch(`${API_URL}/labels`).then(res => res.json())
}