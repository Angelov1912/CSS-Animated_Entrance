//Show and hide info box on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() < 300) {
    $("#box").hide(300); //Fade in speed when the box opens
  } else {
    $("#box").show(300); //Fade out speed when the box closes
  }
});

//Add a function that closes the info box
//when user clicks on X
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
