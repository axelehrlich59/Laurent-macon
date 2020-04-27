$(document).ready(function(){
    $(img).click(function(){
        console.log($(this))
        var image = $(this);
        var backdrop = $(".backdrop");
        var url = image.attr('src');
      var display=  image.clone().appendTo(".backdrop");
      if(display) {
          backdrop.css({"display":"flex" ,"justify-content":"center", "align-items":"center"});
      }
    
})
})


    function unDisplay() {
   var close = document.getElementById("close");
   var backdrop = document.getElementById("backdrop");
   if(backdrop.style.display === "flex") {
    backdrop.style.display = "none";
   }
  };




