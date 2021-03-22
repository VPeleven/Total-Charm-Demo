var headerSlider = new Swiper('.header-slider', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
    },
  });

  var lectorsSlider = new Swiper('.lectors-slider', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    }
  });

  var aboutSlider = new Swiper('.about-us-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
  var masterClass = new Swiper('.master-class-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

