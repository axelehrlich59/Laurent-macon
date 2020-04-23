$(document).ready(function(){
    $(img).click(function(){
        console.log($(this))
        var image = $(this);
       
        var url = image.attr('src');
        window.open(url,'Image','width=1000  ,height= 500,resizable=1');
    })
})

/*
image.style.display = 'block';
image.style.width = 1000+"px";
image.style.height = 100+"%";

var url= image.getAttribute('src');
console.log(url);
window.open(url,'Image','width=largeImage.style.width,height=largeImage.style.height,resizable=1');
*/