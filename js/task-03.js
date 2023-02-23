const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
    .map(({ url, alt }) => {return `<li><img src = "${url}" alt = "${alt}" width="300" height="200"></li>` })
    .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.style.display = 'flex';
gallery.style.justifyContent = 'space-around';
gallery.style.listStyleType = "none";
