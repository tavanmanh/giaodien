function addMenu(){
    var x = document.getElementById("menu");
        x.style.display = "block";
}
function closeMenu(){
    var x = document.getElementById("menu");
        x.style.display = "none";
}
$(document).ready(function(){
    $("div").scroll(function(){
      $("span").text( x+= 1);
    });
  });