//homepage video button
let video = document.getElementById("hero-video");
let btn = document.getElementById("video-btn");

// pause and play the video
function playPause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
}

//menu navbar function
let body = document.getElementsByTagName("BODY")[0];
let openNav = document.getElementById("nav--main");
let menuIcon = document.getElementById("menu--box");
let closeIcon = document.getElementById("menu--close");

function openMenu() {
  openNav.style.transform = 'translateY(0)';
  openNav.style.opacity = '1';
  body.style.overflow = 'hidden';
  menuIcon.style.transform = 'translateY(-100px)';
  closeIcon.style.transform = 'translateY(0)';
}

function closeMenu() {
  openNav.style.transform = 'translateY(-100vh)';
  openNav.style.transition = 'all .5s ease-out';
  openNav.style.opacity = '0'
  body.style.overflow = 'visible';
  menuIcon.style.transform = 'translateY(0)';
  closeIcon.style.transform = 'translateY(-100px)';
}
