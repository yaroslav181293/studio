import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });