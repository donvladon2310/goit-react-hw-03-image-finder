import axios from 'axios';

export async function fetchImages(inputData, page) {
    const searchParams = new URLSearchParams({
        key: '32104554-0b4517e2ee89627b97f0728dd',
        q: inputData,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page,
    });
    const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

    return images.data;
}