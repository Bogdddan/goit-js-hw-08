// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


// Change code below this line

const ul = document.querySelector('.gallery');

const liInUl = galleryItems.map(item =>
    `
        <li class="gallery__item">
    <a class="gallery__link" href='${item.original}'>
    <img
        class="gallery__image"
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'
    />
    </a>
</li>
    `).join('');

ul.insertAdjacentHTML('beforeend' , liInUl);

const gallery = new SimpleLightbox('.gallery a');


console.log(galleryItems);
