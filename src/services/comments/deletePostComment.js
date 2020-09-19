import { API_URL } from '../settings';

export default function deletePostComment(id, post){
    
    const URI = `${API_URL}/comments/${id}`;

    return fetch(URI,{ method: 'DELETE' })
                .then(res => res.json())
}