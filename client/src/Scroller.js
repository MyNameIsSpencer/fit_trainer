var pagetop, yPos;
var scrollTrigger = 0;
function yScroll(){
  let yPos = window.pageYOffset;

  let topPic = document.getElementById('top-pic');
  let theHeader = document.getElementById('theHeader');

  if (topPic && yPos > 70) {
    topPic.style.height = "2vw";
  } else if (topPic && yPos < 70) {
    topPic.style.height = "50vw";
  }

}

window.addEventListener("scroll", yScroll);
