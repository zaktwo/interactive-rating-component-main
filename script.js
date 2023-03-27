const rating = document.getElementsByClassName(".radio-label");
const submitBtn = document.getElementsByClassName(".submit");
const ratingPoint = document.getElementsByClassName(".rating");
const topCard = document.querySelector(".card");
const thankYou = document.querySelector(".thankyou-card");

let rate = null;

rating.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        const active = document.querySelectorAll('input[type="radio"]');
        if(active.checked){
            rate = radioButton.value;
            
        }
    });

});