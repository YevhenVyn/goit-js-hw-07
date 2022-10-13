import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxRef = document.querySelector('.gallery');
const galleryCards = createGalleryCard(galleryItems);
galleryBoxRef.insertAdjacentHTML('beforeend', galleryCards);
galleryBoxRef.addEventListener('click',handleGalleryImageClickUpgrade);
let _instance;

function createGalleryCard(elements) {
    return elements.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join('');
};

function handleGalleryImageClickUpgrade(event) {
  event.preventDefault();
    if (!event.target.classList.contains('gallery__image'))
    {return};
    return runLightbox(event.target.dataset.source);
};

function runLightbox (currentImageSource) {
  _instance = basicLightbox.create(
    `<img src="${currentImageSource}" width="800" height="600">`);

_instance.show();

window.addEventListener('keydown',onEscKeyPress);
}

function onEscKeyPress (event) {
  const escapeKeyCode = 'Escape';
  if (event.code === escapeKeyCode) {
      _instance.close();
      window.removeEventListener('keydown',onEscKeyPress);
  }
  }




// console.log(galleryItems);

// The first way - ONE BIG function
// function handleGalleryImageClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('gallery__image'))
//   {return};

//   const instance = basicLightbox.create(
//       `<img src="${event.target.dataset.source}" width="800" height="600">`);

// instance.show();

// window.addEventListener('keydown',onEscKeyPress);

// function onEscKeyPress (event) {
//   const escapeKeyCode = 'Escape';
//   if (event.code === escapeKeyCode) {
//       instance.close();
//       window.removeEventListener('keydown',onEscKeyPress);
//   }
// };
// };
