const txt = document.querySelector("#txt");


window.addEventListener('scroll', e => {
  if (scrollY >= 220) {
    txt.classList.add("op");
  } else {
    txt.classList.remove("op");
  }
});