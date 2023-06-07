import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>
`;

galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const modalImg = event.target
    .closest(".gallery__image")
    .getAttribute("data-source");
  const instance = basicLightbox.create(`
      <img src="${modalImg}" width="800" height="600">
    `);
  instance.show();
  document.addEventListener("keydown", (event) => onEscPress(event, instance));
});

const onEscPress = (event, instance) => {
  const ESC_KEYCODE = "Escape";
  if (event.code === ESC_KEYCODE) {
    instance.close();
    document.removeEventListener("keydown", (event) =>
      onEscPress(event, instance)
    );
  }
};
