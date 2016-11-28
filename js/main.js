
document.addEventListener("DOMContentLoaded", function () {

  document.querySelector('body').classList.add('has-js');

  // tofuburger toggle
  
  var burger = document.querySelector('.logo-burger');
  var cross = document.querySelector('.navigation-button');
  var nav = document.querySelector('.l-navigation');

  burger.addEventListener('click', function () {
    nav.classList.toggle('is-open');
  });
  cross.addEventListener('click', function () {
    nav.classList.toggle('is-open');
  });

  // faq accordion

  if (document.querySelector('body').classList.contains('has-js')) {
    var heads = document.querySelectorAll('.accordion-h');
    var bodies = document.querySelectorAll('.accordion-b');

    for (var item of bodies) {
      item.classList.add('is-hidden');
    }

    for (var i = 0; i < heads.length; i++) {
      heads[i].addEventListener('click', function (el) {
        this.classList.toggle('is-open');
        this.nextElementSibling.classList.toggle('is-hidden');
      });
    }
  }
});

