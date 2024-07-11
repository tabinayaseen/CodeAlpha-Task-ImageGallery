const galleryContainer = document.getElementById('gallery');
const filters = document.getElementById('filters');

const images = [
    { src: 'bag1.jpg', category: 'Bags' },
    { src: 'clot1.jpg', category: 'Clothes' },
    { src: 'shoes1.jpg', category: 'Shoes' },
    { src: 'clot2.jpg', category: 'Clothes' },
    { src: 'shoes2.jpg', category: 'Shoes' },
    { src: 'bag2.jpg', category: 'Bags' },
    { src: 'bag3.jpg', category: 'Bags' },
    { src: 'shoes3.jpg', category: 'Shoes' },
    { src: 'clot3.jpg', category: 'Clothes' },
    { src: 'shoes4.jpg', category: 'Shoes' },
    { src: 'clot4.jpg', category: 'Clothes' },
    { src: 'bag4.jpg', category: 'Bags' },
    { src: 'bag5.jpg', category: 'Bags' },
    { src: 'shoes5.jpg', category: 'Shoes' },
    { src: 'clot5.jpg', category: 'Clothes' },
];

const renderGallery = () => {
    galleryContainer.innerHTML = '';
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image.src}" alt="${image.src}">`;
        galleryContainer.appendChild(galleryItem);
    });
};

const filterImages = (category) => {
    galleryContainer.innerHTML = '';
    images.forEach(image => {
        if (image.category === category || category === 'all') {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `<img src="${image.src}" alt="${image.src}">`;
            galleryContainer.appendChild(galleryItem);
        }
    });
};

filters.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const category = event.target.getAttribute('data-filter');
        filterImages(category);
    }
});

renderGallery();