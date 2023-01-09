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

function textSlide() {
  const carousel = document.querySelector('.text-slide');
  const slides = carousel.querySelectorAll('ul.slide-text > li')
  const btnPlay = carousel.querySelector('p.control a.play');
  const btnPrev = carousel.querySelector('p.control a.prev');
  const btnNext = carousel.querySelector('p.control a.next');

  let numSlide = slides.length - 1;
  let slideNow = 0;
  let slidePrev = 0;
  let slideNext = 0;
  let slideFirst = 0;
  let timerId = '';
  let timerSpeed = 3000;
  let isTimerOn = false

  showSlide(slideFirst);
  SetEvent();

  function SetEvent() {
    btnPrev.addEventListener('click',function(){
      showSlide(slidePrev);
    },false);

    btnNext.addEventListener('click',function(){
      showSlide(slideNext);
    },false);

    btnPlay.addEventListener('click',function() {
      if(isTimerOn === true){
        stopTimer();
      }else{
        startTimer();
      }
    },false);
  }


  function startTimer() {
  timerId = setTimeout(function() {showSlide(slideNext);},timerSpeed);
  btnPlay.classList.add('on');
  isTimerOn = true;
  }
  function stopTimer() {
    clearTimeout(timerId);
    btnPlay.classList.remove('on');
    isTimerOn = false;
  }
  function restartTimer() {
    clearTimeout(timerId);
    timerId = setTimeout(function() {showSlide(slideNext);},timerSpeed);
  }


  function showSlide(n) {
    slides.forEach(function(slide){
      slide.classList.remove('on');
    })
    slides[n].classList.add('on');
    slideNow = n;
    slidePrev = (n === 0) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 0 : (n + 1);
    if (isTimerOn === true){
      restartTimer();
    }
  };
}







