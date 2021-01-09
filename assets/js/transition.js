var image = new Image();
image.onload = function () {
        $(".main_div--home-top-page").css("background-image", "url('" + image.src + "')");
}

image.src = "../img/carrelage-final.gif";