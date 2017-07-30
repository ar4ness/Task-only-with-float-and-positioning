function showText(el) {
  if(el.previousElementSibling.clientHeight === 86) {
    el.previousElementSibling.style.height = "100%";
    el.innerHTML = "Свернуть...";
  }
  else {
    el.previousElementSibling.style.height = "86px";
    el.innerHTML = "Читать далее...";
  };
}


