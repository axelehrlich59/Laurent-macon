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