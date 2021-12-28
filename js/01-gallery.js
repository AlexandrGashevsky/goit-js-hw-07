import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");


const galleryImages = galleryItems.map(({preview, original, description}) => 
   ` <div class="gallery__item">
        <a class ="gallery__link" href = "large-image.jpg">
            <img class = "gallery__image" src = "${preview}" 
            data-source="${original}" alt="${description}"/>
        </a>
    </div>`
).join("");


var modal;
function showModal (event) {
   event.preventDefault();
   if(event.currentTarget === event.target) {
    return;
}
    const selectedPicture = event.target.dataset.source;
    modal = basicLightbox.create(`
    <div class="modal">
    <img href="large-image.jpg" src ="${selectedPicture}" width="1280" height="854"/>
    </div>
`);
    modal.show();
}

function hideModal (event){
    if (event.key == "Escape") {
        console.log("Escape pressed");
    }
    modal.close();
}

galleryList.insertAdjacentHTML('beforeend', galleryImages);
galleryList.addEventListener('click', showModal);
document.addEventListener('keydown', hideModal);