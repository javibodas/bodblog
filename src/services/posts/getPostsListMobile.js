import { API_URL } from '../settings';

export default function getPostsListMobile(){
    return fetch(`${API_URL}/articles/mobile`).then(res => res.json())

}