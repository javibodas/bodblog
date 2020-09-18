import { API_URL } from '../settings';

export default function getRssFeed(){

    return fetch(`${API_URL}/rss`).then(res => res.text())
}