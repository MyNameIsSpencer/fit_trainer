var pagetop, yPos;
var scrollTrigger = 0;
function yScroll(){
  let yPos = window.pageYOffset;

  let topPic = document.getElementById('top-pic');

  if (yPos > 100) {
    topPic.style.height = "0px";
  }

}

window.addEventListener("scroll", yScroll);
