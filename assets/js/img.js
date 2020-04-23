
//Code for realisation pictures
window.addEventListener("DOMContentLoaded", function() {
    var largeImage = document.getElementsByTagName('img');
    let x;
    for (x in largeImage){
        largeImage[x].addEventListener("click",function(){swipe(largeImage[x])},false)
    }
/*for(var i = 0; i < largeImage.length ; i++) {
    console.log(i)
largeImage[i].addEventListener("click",function(){swipe(largeImage[i])},false)
}*/
}, false);

function swipe(image) {
    console.log(image);
    image.style.display = 'block';
    image.style.width = 1000+"px";
    image.style.height = 100+"%";
    
    var url= image.getAttribute('src');
    console.log(url);
    window.open(url,'Image','width=largeImage.style.width,height=largeImage.style.height,resizable=1');
    
    }



