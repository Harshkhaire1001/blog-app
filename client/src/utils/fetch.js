export default function fetchWithBaseURL(url, options = {}) {
    const baseURL = 'http://localhost:2000/';
    const fullURL = baseURL + url;
    
    return fetch(fullURL, options);
}