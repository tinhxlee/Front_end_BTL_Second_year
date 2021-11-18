
var images = [
    './image/Slider/1.png',
    './image/Slider/2.jpg',
    './image/Slider/3.jpg',
    './image/Slider/4.jpg',
    './image/Slider/5.jpg'
];
var num = 0 ;
function next(){
    var slider = document.getElementById('slider');
    num ++ ;
    if(num >= images.length)
    {
        num = 0 ;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
setInterval(function(){
    next();

},5000)

// Model buy
const model = document.querySelector('.model-buy');
const buyBtns = document.querySelectorAll('.buy');
function showLogin(){
    model.style.display = 'flex';
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showLogin);
}
function closeLogin(){
    model.style.display = 'none';
}
model.addEventListener('click',closeLogin);
// Input email
// const input = document.querySelector('.input');
const btnEmail = document.querySelector('.btn');
let modelEmail = document.querySelector('.success-email')
// function checkEmail(){
//     if(input.test('/[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$/') == true){
//         return true ;
//     }else {
//         return false
//     }
// }
let e = /[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$/;
let inputId = document.getElementById('input-id').value ;
function success(){ 
    if(e.test(inputId) == false){
        alert('hay nhap mk');
        // return true;
    }
    else{
        // modelEmail.style.display = 'flex';
        alert('cam on ban');
    }
}
function closeSuccess(){
    modelEmail.style.display = 'none';
}

// var checkEmail = /[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$/ ;
modelEmail.addEventListener('click',closeSuccess);
