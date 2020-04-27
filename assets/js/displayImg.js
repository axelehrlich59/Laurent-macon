$(document).ready(function(){
    $(img).click(function(){
        console.log($(this))
        var image = $(this);
        var backdrop = $(".backdrop");
        var url = image.attr('src');
        $('#displayImg').attr('src',url);
        backdrop.show();
        
})
$('#close').click(function(e){
    e.preventDefault()
    $(".backdrop").hide();
})
})



    /*function unDisplay() {
   var close = document.getElementById("close");
   var backdrop = document.getElementById("backdrop");
   if(backdrop.style.display === "flex") {
    this.parentNode.parentNode.parentNode
    .removeChild(this.parentNode.parentNode);
    return false;
   }
  };*/




