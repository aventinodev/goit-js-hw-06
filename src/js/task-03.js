const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

const makeImageMarkUp = (image) => {
  const { url, alt } = image;
  return `<li class="gallery__item"><div class ="gallery__wrap">
  <img class="gallery__img" src= ${url} alt= ${alt} /></div></li>`;
};

const makeImageGalleryMarkUp = images.map(makeImageMarkUp).join("");

console.log(images);
console.log(makeImageMarkUp(images[0]));
console.log(makeImageGalleryMarkUp);

galleryEl.insertAdjacentHTML("afterbegin", makeImageGalleryMarkUp);
