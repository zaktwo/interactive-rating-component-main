// const rating = document.querySelector('.form');
const submitBtn = document.querySelector('.submit');
const ratingPoint = document.getElementsByClassName('.rating');
const topCard = document.querySelector('.card');
const thankYou = document.querySelector('.thankyou-card');

// let rate = null;

// rating.forEach((rating) => {
    
// }); 

// function isChecked(){
// let rate = null;

// rating.forEach(radio => { 
//   if (radio.checked) {
//     // do whatever you want with the checked radio
    
//     rate = radio.value;
//     console.log(rate);

//   }
// });
// }
// submitBtn.forEach((submitBtn) => {
   
//     submitBtn.addEventListener("click", ()=> {
//         // if( submitBtn){
//             // topCard.classList.remove("hiddent");
//             topCard.style.display ="none";
//             thankYou.classList.remove("hidden");
//             thankYou.style.display = "block";
            
//         // } 
//     })
// })


const form = document.querySelector(".form");
const thankCard = document.querySelector(".thankyou-card");
const ratingCard = document.querySelector(".card");
const ratingBtns = document.querySelectorAll("input[type = radio]");
const ratingTxt = document.querySelector(".result-submited");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ratingCard.classList.add("hidden");
  thankCard.classList.remove("hidden");
  const selectedRate = form.rating.value;
  ratingTxt.textContent = `You selected ${selectedRate} out of 5`;
});

ratingBtns.forEach((btn) => {
  btn.addEventListener("change", function () {
    document.querySelector(".submit__btn").removeAttribute("disabled");
  });
});


