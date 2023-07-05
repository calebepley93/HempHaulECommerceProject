let description = document.querySelector('#description');
let reviews = document.querySelector('#reviews');

let addToCartButtonListener = document.querySelector('.add-to-cart-btn');
let viewCartAppear = document.querySelector('.view-cart-appear');

let descriptionContent = document.querySelector('#description-content');
let reviewsContent = document.querySelector('#reviews-content');

addToCartButtonListener.addEventListener('click', function() {
    viewCartAppear.style.display = 'block';
});

description.addEventListener('click', function() {
    description.style.backgroundColor = 'rgba(250, 250, 250, .85)'; 
    description.style.borderTop = '5px solid rgb(68, 99, 55)'; 
    descriptionContent.style.display = 'block'; 
    reviewsContent.style.display = 'none'; 
    reviews.style.backgroundColor = null;
    reviews.style.border = null;
});

reviews.addEventListener('click', function() {
    reviews.style.backgroundColor = 'rgba(250, 250, 250, .85)'; 
    reviews.style.borderTop = '5px solid rgb(68, 99, 55)'; 
    reviewsContent.style.display = 'block'; 
    descriptionContent.style.display = 'none';
    description.style.backgroundColor = null;
    description.style.border = null;
});

description.click();

$(document).ready(function(){
    $('.zoom').zoom();
  });



 