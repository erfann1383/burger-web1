import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const orderBtn = document.getElementById("orderBtn");
 


Swiper.use([Navigation, Pagination]);



document.getElementById("bar")!.addEventListener("click",()=>{
    let sidebar = document.getElementById("sidebar");
    if (sidebar!.style.right === "0px") {
        sidebar!.style.right = "-200px";
      } else {
        sidebar!.style.right = " 0px";
      }
})

const swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
     spaceBetween: 0,
     loop: true,
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
});


orderBtn?.addEventListener("click",()=>{
  alert("Your order has been placed")
})












