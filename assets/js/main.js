function toggle() {
  var target = document.getElementsByClassName("burgers")[0];
  if (!target.classList.contains('collapse')) {
    target.classList.add('collapse')
  }
  else {
    target.classList.remove('collapse')
  }
}