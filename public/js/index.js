// DinoWorks Common Script 2022-08-06

window.addEventListener('load', function() {
  preventDefault();


}, false);


function preventDefault() {
  const links = document.querySelectorAll('a[href="#"]');
  links.forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
    }, false);
  });
}







