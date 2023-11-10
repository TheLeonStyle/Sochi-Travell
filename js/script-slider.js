if (document.querySelector('.swiper')) {
  new Swiper('.reviews__slider', {
    // Optional parameters
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    // slidesPerView: 1,
    spaceBetween: 10,
    // autoHeight: true,
    speed: 800,
    // loop: true, // Круговой слайдер
    speed: 800, // Скорость переключения слайдов
    effect: 'slider', // cards, coverflow, flip, fade, cude
    initialSlide: 6, // Начинает с 0 слайда
    // freeMode: true, // Можно перелистывать как лесту
    slidesPerView: 5.5, // Кол-во активных слайдов
    centeredSlides: true, // Центрирование слайдов
    slideToClickedSlide: true, // Переключение по клику включено

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5000,
    },

    // Брейкпоинты
    breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //   },
      //   450: {
      //     slidesPerView: 1.5,
      //     spaceBetween: 0,
      //   },
      //   600: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
      //   },
      //   900: {
      //     slidesPerView: 3,
      //     spaceBetween: 10,
      //   },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1100: {
        slidesPerView: 5.5,
        spaceBetween: 10,
      },
    },
  });

  new Swiper('.photo__slider', {
    // Optional parameters
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    // slidesPerView: 1,
    spaceBetween: 10,
    // autoHeight: true,
    speed: 800,
    // loop: true, // Круговой слайдер
    // speed: 500, // Скорость переключения слайдов
    effect: 'fade', // cards, coverflow, flip, fade, cude
    initialSlide: 0, // Начинает с 0 слайда
    // freeMode: true, // Можно перелистывать как лесту
    slidesPerView: 1, // Кол-во активных слайдов
    // centeredSlides: true, // Центрирование слайдов
    // slideToClickedSlide: true, // Переключение по клику включено

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //   delay: 5000,
    // },

    // Брейкпоинты
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //   },
    //   400: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    //   500: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 10,
    //   },
    //   800: {
    //     slidesPerView: 3.2,
    //     spaceBetween: 10,
    //   },
    //   900: {
    //     slidesPerView: 3.5,
    //     spaceBetween: 10,
    //   },
    //   1100: {
    //     slidesPerView: 5.5,
    //     spaceBetween: 10,
    //   },
    // },
  });
}
