import "./../node_modules/@glidejs/glide/dist/css/glide.core.css";
import Glide from "@glidejs/glide";

const images = document.getElementsByClassName("card__image");

const randomHexadecimal = () => {
  let hex = parseInt(Math.floor(Math.random() * 255 + 1)).toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
};

const randomColorHexadecimal = () => {
  return `${randomHexadecimal()}${randomHexadecimal()}${randomHexadecimal()}`;
};

Array.from(images).forEach((img) => {
  img.src = `${img.src}${randomColorHexadecimal()}/${randomColorHexadecimal()}`;
});

// new Glide(".glide").mount();

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1,
  autoplay: 5000,
}).mount();
