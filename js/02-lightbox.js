import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;
galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");
// galleryList.addEventListener("click", (event) => {
//
// });
const lightbox = new SimpleLightbox(".gallery__link", {
  animationSpeed: 250,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
});
lightbox.on("show.simplelightbox");
