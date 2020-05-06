//all image of realisation page
let img = document.getElementsByName('img');
let realisationGalery = document.getElementById('realisationGalery');
// previous btn
let previous =  document.getElementById('previous');
// next btn
let next =  document.getElementById('next');
// where i want to show the image (viewer)
let display_img = document.getElementsByClassName('display-img')[0];
// the block content the viewer
let backDrop = document.getElementById('backdrop');
// variable to get the same index of current image
let index = 0;
//function to get the same src of current image
function getSrc (e){
    let target = e.target;

    for(let i = 0; i < img.length; i++){
        if(target == img[i]){
            realisationGalery.src = target.src;
            console.log(i);
            index = i;
        }
    }
    return index;
}

// add the function for getSrc
realisationGalery.addEventListener('click', getSrc);

// function for increment image
function changeSlide(sens) {
    
    index = index + sens;
    if (index < 0){
        index = img.length - 1;

    }
    if (index > img.length - 1){
        index = 0;
    }
    display_img.src = img[index].src;

}

// add function changeSlide
backDrop.addEventListener('click', (e) =>{
    let target = e.target;

    if(target == previous){
        changeSlide(-1);
    }else if(target == next){
        changeSlide(1);
    }
    
});