let img = document.getElementsByName('img');
let realisationGalery = document.getElementById('realisationGalery');
let previous =  document.getElementById('previous');
let next =  document.getElementById('next');
let display_img = document.getElementsByClassName('display-img');
let backDrop = document.getElementById('backdrop');
arr = [];

for(let src of img){
    arr.push(src.src);
}

let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0){
        numero = arr.length - 1;

    }
    if (numero > arr.length - 1){
           numero = 0;
    }
    display_img.src = arr[numero];

}