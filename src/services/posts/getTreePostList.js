import { API_URL } from '../settings';

export default function getTreePostList(){
    return  fetch(`${API_URL}/articles/tree`).then(res => res.json());
}