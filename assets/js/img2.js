$(document).ready(function(){
    $(img).click(function(){
        console.log($(this))
        var image = $(this);
        var backdrop = $(".backdrop");
        var url = image.attr('src');
      var display=  image.appendTo(".backdrop");
      if(display) {
          backdrop.css("display", "block");
      }

        
     
})
})




