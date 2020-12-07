let aboutQuantites = document.querySelectorAll('.about__quantity');
let aboutQuantityValues = [
  {
    val: 13,
  },
  {
    val: 14,
  },
  {
    val: 30,
  },
];
let distanceToAbout = $('.about').offset().top - $(window).scrollTop() - $('.about').height();

let quantityStart = false;
$(window).on('scroll', showQuantity);

function showQuantity() {
  if ($(window).scrollTop() >= distanceToAbout) {
    Array.from(aboutQuantites).forEach((item, i) => {
      anime({
        targets: item,
        innerHTML: [0, aboutQuantityValues[i].val],
        easing: 'linear',
        round: 10,
      });
    });
    quantityStart = true;
  }
  if (quantityStart) {
    $(window).off('scroll', showQuantity);
  }
}

$('.gallery__slides').slick({
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1992,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
  //slidesToScroll: 3,
});

// new Glide(".glide", {
//   type: "carousel",
//   breakpoints: {
//     3000: {
//       perView: 4,
//     },
//     1024: {
//       perView: 3,
//     },
//     768: {
//       perView: 2,
//     },
//   },

//   startAt: 0,
// }).mount();

setTimeout(() => {
  let btnElem = $('.gallery__arrows');
  let galleryHeight = $('.gallery__wrapper').height() / 2;
  console.log(galleryHeight);
  btnElem.css('top', `${galleryHeight}px`);
}, 300);