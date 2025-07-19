// ---------------------slider navbar
const menu=document.querySelector(".menuBtn");
const menubar=document.querySelector(".menuBar");
const menucross=document.querySelector(".menu_cross");
const menucross1=document.querySelector(".menu_cross1");
const menucross2=document.querySelector(".menu_cross2");
const menucross3=document.querySelector(".menu_cross3");

menu.addEventListener("click",()=>{
    menubar.style.transform="translateX(0%)";
})

menucross.addEventListener("click",()=>{
    menubar.style.transform="translateX(100%)";
})

menucross1.addEventListener("click",()=>{
    menubar.style.transform="translateX(100%)";

})
menucross2.addEventListener("click",()=>{
    menubar.style.transform="translateX(100%)";

})
menucross3.addEventListener("click",()=>{
    menubar.style.transform="translateX(100%)";

})






// --------------------------scrollup to hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarup").style.top = "0";
  } else {
    document.getElementById("navbarup").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}







// ---------------------swiper card
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    // 320: {
    //   slidesPerView: 2
    // },
  //   768: {
  //     slidesPerView: 3
  //   },
  //   1024: {
  //     slidesPerView: 4
  //   }
    
  }
});







// -----------------------------automatic move slides
// let slideIndex = 0;
// showSlides();
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }






// about us toggle 
// function changesize() {
//   document.getElementById("aboutusbox1").classList.toggle("aboutustoggle");
//   document.getElementById("heading3box").classList.toggle("heading3boxVisible");
//   document.getElementById("aboutusbox2").classList.toggle("aboutusbox2margin");

// }


function swapsize(){
  document.getElementById("addgrp").classList.toggle("swapp");
  
}

function swap(){
  document.getElementById("addgrp").classList.toggle("swappp");
}

















// projects section sync cards

const sliderTrack = document.getElementById('sliderTrack');
const secondaryTrack = document.getElementById('secondaryTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardCount = sliderTrack.children.length;
console.log(cardCount);




const container1 =document.getElementById('slider1');
const cardWidth1 = container1.offsetWidth;
console.log(`Width (including padding and border of 1): ${cardWidth1}px`);

const container = document.getElementById('mainContainer2');
const cardWidth = container.offsetWidth;
console.log(`Width (including padding and border): ${cardWidth}px`);
  
  // const cardWidth = 830;
let currentIndex = 0;

function updateSliders() {
    sliderTrack.style.transform = `translateX(-${cardWidth1 * currentIndex}px)`;
    secondaryTrack.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

console.log(currentIndex);
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    updateSliders();
};

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % cardCount;
    updateSliders();
};

  // Optional: allow clicking cards in secondary slider to sync main slider
Array.from(secondaryTrack.children).forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.onclick = () => {
      currentIndex = idx;
      updateSliders();
    };
});












// join card (click on card to join)



          function joinCard() {

            var url = "https://wa.me/919392246882?text="  
                + "I would like to join your firm";

            window.open(url, '_blank').focus();
        }




