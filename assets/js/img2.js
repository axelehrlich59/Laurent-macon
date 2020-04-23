$(document).ready(function(){
    $(img).click(function(){
        console.log($(this))
        var image = $(this);
      // var back = ;
        var url = image.attr('src');
        window.open(url,'Image','width=1000  ,height= 500,resizable=1');
    })
})

