
// let modeBtn = document.querySelector("#mode");
// let currMode= "light";

// modeBtn.addEventListener("click", () =>{
//     if(currMode ==="light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor="white"; 
//     }

//     console.log(currMode);

// })
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add('active');
  setTimeout(showSlide, 2000); // Change slide every 2 seconds
}

showSlide(); // Start the slideshow