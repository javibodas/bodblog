import { API_URL } from '../settings';

export default function addPostComment(id, post){
    console.log(post)
    const URI = `${API_URL}/comments/${id}`;
    console.log(URI)
    return fetch(URI,{
                    method: 'POST',
                    body: JSON.stringify(post),
                    headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
                .then(res => res.json())
}