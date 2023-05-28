
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');



const GalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const makeGallery = galleryItems.map(GalleryMarkup).join('');


gallery.insertAdjacentHTML('afterbegin', makeGallery);


new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


console.log(galleryItems);

