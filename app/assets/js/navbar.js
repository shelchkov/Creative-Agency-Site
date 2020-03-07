// Smooth Scrolling
$('nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});


// Sticky menu background
const menu = document.querySelector('div.fixed-top');
window.addEventListener('scroll', function() {
  if (this.scrollY <= 50) {
    menu.classList.add("bg-transparent");
    menu.classList.remove("bg-info");
    menu.style.opacity = 1;
    return;
  }

  if(this.scrollY > 50 && this.scrollY <= 100) {
    menu.classList.add("bg-info");
    menu.classList.remove("bg-transparent");
    menu.style.opacity = .5;

  } else if(this.scrollY > 100 && this.scrollY <= 200) {
    menu.style.opacity = .6;

  } else if(this.scrollY > 200 && this.scrollY <= 300) {
    menu.style.opacity = .7;

  } else if(this.scrollY > 300 && this.scrollY <= 400) {
    menu.style.opacity = .8;

  } else {
    menu.style.opacity = .9;
  }
});