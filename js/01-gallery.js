import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
      </a>
    </li>`
    )
    .join("");
}

const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

gallery.addEventListener("click", clickOnImage);

function clickOnImage(imageAction) {
  action(imageAction);

  if (imageAction.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${imageAction.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  gallery.addEventListener("keydown", (imageAction) => {
    if (imageAction.code === "Escape") {
      instance.close();
    }
  });
}

function action(imageAction) {
  imageAction.preventDefault();
}
