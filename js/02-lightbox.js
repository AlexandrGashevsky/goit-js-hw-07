import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const galleryImages = galleryItems.map(({preview, original, description}) => 
   `<a class="gallery__item" href="${original}">
            <img class = "gallery__image" src = "${preview}" alt="${description}"/>
    </a>`
).join("");

galleryList.insertAdjacentHTML('beforeend', galleryImages);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	
});