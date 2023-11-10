// Глобальные переменные
const burger = document.querySelector('.header__burger');
const popup = document.querySelector('.popup');
const html = document.querySelector('html');

function onClickBurger() {
  burger.addEventListener('click', function () {
    popup.classList.toggle('active'); // Показывает/скрывает popup
    burger.classList.toggle('active'); // Показывает/скрывает крестик burger'a
    if (window.innerHeight > 380) {
      hiddenOverflow();
    }
  });
}
onClickBurger();

function moveHeaderElements() {
  // Получаем элементы
  const popupWrapper = document.querySelector('.popup__wrapper');
  const headerWrapper = document.querySelector('.header__wrapper');
  const headerNav = document.querySelector('.header__nav');

  // Перемещаем элемент headerNav по умолчанию
  if (1124.98 > window.innerWidth) {
    popupWrapper.appendChild(headerNav); // Если размер окна меньше 1124px, тогда элемент headerNav перемещается в popupWrapper
  } else {
    headerWrapper.insertBefore(headerNav, headerWrapper.firstChild); // Если размер окна больше 1124px, тогда элемент headerNav перемещается в headerWrapper
  }

  // Перемещаем элемент headerNav при изменений окна
  window.addEventListener('resize', function (event) {
    if (1124.98 > event.srcElement.innerWidth) {
      popupWrapper.appendChild(headerNav); // Если размер окна меньше 1124px, тогда элемент headerNav перемещается в popupWrapper
    } else {
      headerWrapper.insertBefore(headerNav, headerWrapper.firstChild); // Если размер окна больше 1124px, тогда элемент headerNav перемещается в headerWrapper
    }
  });

  const headerRight = document.querySelector('.header__right');
  const headerBurger = document.querySelector('.header__burger');

  // Перемещаем элемент headerRight по умолчанию
  if (768.98 > window.innerWidth) {
    popupWrapper.appendChild(headerRight); // Если размер окна меньше 768px, тогда элемент headerRight перемещается в popupWrapper
  } else {
    headerWrapper.insertBefore(headerRight, headerBurger); // Если размер окна больше 768px, тогда элемент headerRight перемещается в headerWrapper
  }

  // Перемещаем элемент headerNav при изменений окна
  window.addEventListener('resize', function (event) {
    if (768.98 > window.innerWidth) {
      popupWrapper.appendChild(headerRight); // Если размер окна меньше 768px, тогда элемент headerRight перемещается в popupWrapper
    } else {
      headerWrapper.insertBefore(headerRight, headerBurger); // Если размер окна больше 768px, тогда элемент headerRight перемещается в headerWrapper
    }
  });
}
moveHeaderElements();

function onClickHeaderButtons() {
  const headerButtons = document.querySelectorAll('.header__button');

  // При клике на кнопку навигаций скрывает burger и popup
  headerButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      popup.classList.remove('active'); // Скрывает popup
      burger.classList.remove('active'); // Скрывает крестик burger'a
      html.classList.remove('overflow');
    });
  });
}
onClickHeaderButtons();

if (document.querySelector('.ticker')) {
  function ticker() {
    const ticker = document.querySelector('.ticker');
    const windowWidth = window.innerWidth;
    const tickerTitle = document.querySelector('.ticker__title');

    const maxTitles = Math.floor(windowWidth / tickerTitle.offsetWidth);

    for (let i = 0; i < maxTitles + 2; i++) {
      const title = document.createElement('p');
      title.className = 'ticker__title';
      title.textContent = tickerTitle.innerHTML; // Замените на свой текст
      ticker.appendChild(title);
    }
  }
  ticker();
}

if (document.querySelector('.intro__title')) {
  function scrollHeaderBg() {
    // Получаем элементы
    const header = document.querySelector('.header');
    const introTitle = document.querySelector('.intro__title');

    // При скроле на introTitle.offsetTop пикселей вниз, добавляем/скрываем фон
    if (window.scrollY >= introTitle.offsetTop - header.clientHeight) {
      header.classList.add('bg'); // Добавляем класс bg
    } else if (window.scrollY <= introTitle.offsetTop - header.clientHeight) {
      header.classList.remove('bg'); // Удаляем класс bg
    }

    if (768.98 < window.innerWidth) {
      window.addEventListener('scroll', scrollHeaderBg);
    }
    if (768.98 > window.innerWidth) {
      header.classList.remove('bg'); // Удаляем класс bg
    }
  }
  scrollHeaderBg();
  window.addEventListener('scroll', scrollHeaderBg);
}

if (document.querySelector('.main__title')) {
  function scrollHeaderBgMain() {
    // Получаем элементы
    const header = document.querySelector('.header');
    const mainTitle = document.querySelector('.main__text');

    // При скроле на mainTitle.offsetTop пикселей вниз, добавляем/скрываем фон
    if (window.scrollY >= mainTitle.offsetTop - header.clientHeight) {
      header.classList.add('bg'); // Добавляем класс bg
    } else if (window.scrollY <= mainTitle.offsetTop - header.clientHeight) {
      header.classList.remove('bg'); // Удаляем класс bg
    }

    if (768.98 < window.innerWidth) {
      window.addEventListener('scroll', scrollHeaderBg);
    }
    if (768.98 > window.innerWidth) {
      header.classList.remove('bg'); // Удаляем класс bg
    }
  }
  scrollHeaderBgMain();
  window.addEventListener('scroll', scrollHeaderBgMain);
}

if (document.querySelector('.gallery')) {
  function renderGallery() {
    fetch('./gallery.json')
      .then((res) => res.json())
      .then((json) => getObj(json));

    function getObj(json) {
      json.forEach((obj) => {
        render(
          obj.id,
          obj.link,
          obj.title,
          obj.subtitle,
          obj.price.discount,
          obj.price.strike,
          obj.price.count,
        );
      });
    }

    function render(id, link, title, subtitle, discount, strike, count) {
      let strikeElement;
      if (strike !== undefined) {
        strikeElement = `<strike>${strike} р.</strike>`;
      } else {
        strikeElement = '';
      }

      let countElement;
      if (count !== undefined) {
        countElement = `${count}`;
      } else {
        countElement = '';
      }

      const element = `
					<div class="gallery__item">
						<a href="./html/${link}.html" class="gallery__link">
							<div class="gallery__image gallery__image-0${id}"></div>
						</a>
						<div class="gallery__title">${title}</div>
						<div class="gallery__subtitle">${subtitle}</div>
						<div class="gallery__price">${discount} р. ${strikeElement} ${countElement}</div>
						<a href="./html/${link}" class="gallery__button">Подробнее</a>
					</div>
				`;

      const galleryItems = document.querySelector('.gallery__items');
      galleryItems.insertAdjacentHTML('beforeend', element);
    }
  }
  renderGallery();
}

function moveScroll() {
  const headerNav = document.querySelector('.header__nav');
  headerNav.addEventListener('click', function (event) {
    if (event.target.classList.contains('header__button-gallery')) {
      document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
    }
    if (event.target.classList.contains('header__button-advantages')) {
      document.querySelector('.advantages').scrollIntoView({ behavior: 'smooth' });
    }
    if (event.target.classList.contains('header__button-reviews')) {
      document.querySelector('.reviews').scrollIntoView({ behavior: 'smooth' });
    }
    if (event.target.classList.contains('header__button-contacts')) {
      document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth' });
    }
  });
}
moveScroll();

function hiddenOverflow() {
  if (document.querySelector('.popup.active')) {
    html.classList.add('overflow');
  } else {
    html.classList.remove('overflow');
  }
}
hiddenOverflow();

//========================================================================================================================================================
function reserveVisible() {
  const reserveButtons = document.querySelectorAll('.reserve-active');
  const reserve = document.querySelector('.reserve');
  const reservePopup = document.querySelector('.reserve__popup');

  reserveButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      reserve.classList.add('active');
      html.classList.add('overflow');
      popup.classList.remove('active'); // Скрывает popup
      burger.classList.remove('active'); // Скрывает крестик burger'a
    });
  });

  const reserveClose = document.querySelector('.reserve__close');
  reserveClose.addEventListener('click', function (event) {
    reserve.classList.remove('active');
    html.classList.remove('overflow');
  });

  // // Добавьте обработчик события клика на документ
  // document.addEventListener('click', function (event) {
  //   // Проверьте, был ли клик вне всплывающего окна и его дочерних элементов
  //   if (!reservePopup.contains(event.target) && event.target !== button) {
  //     reserve.classList.remove('active');
  //     html.classList.remove('overflow');
  //   }
  // });
}
reserveVisible();

function reserveNavigation() {
  const buttonPrev = document.querySelectorAll('.reserve__button-prev');
  const buttonNext = document.querySelectorAll('.reserve__button-next');
  let index = 1;

  buttonPrev.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (index > 1) {
        --index;
        currentPage(index);
      }
    });
  });

  buttonNext.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (index < 5) {
        ++index;
        currentPage(index);
      }
    });
  });

  function currentPage(index) {
    const reserveForm = document.querySelector('.reserve__form');
    if (index == 1) {
      reserveForm.classList.remove('reserve__form-2');
      reserveForm.classList.remove('reserve__form-3');
      reserveForm.classList.remove('reserve__form-4');
      reserveForm.classList.add('reserve__form-1');
      reserveForm.classList.remove('reserve__form-5');
    }
    if (index == 2) {
      reserveForm.classList.remove('reserve__form-1');
      reserveForm.classList.remove('reserve__form-3');
      reserveForm.classList.remove('reserve__form-4');
      reserveForm.classList.add('reserve__form-2');
      reserveForm.classList.remove('reserve__form-5');
    }
    if (index == 3) {
      reserveForm.classList.remove('reserve__form-1');
      reserveForm.classList.remove('reserve__form-2');
      reserveForm.classList.remove('reserve__form-4');
      reserveForm.classList.add('reserve__form-3');
      reserveForm.classList.remove('reserve__form-5');
    }
    if (index == 4) {
      reserveForm.classList.remove('reserve__form-1');
      reserveForm.classList.remove('reserve__form-2');
      reserveForm.classList.remove('reserve__form-3');
      reserveForm.classList.add('reserve__form-4');
      reserveForm.classList.remove('reserve__form-5');
    }
    if (index == 5) {
      reserveForm.classList.remove('reserve__form-1');
      reserveForm.classList.remove('reserve__form-2');
      reserveForm.classList.remove('reserve__form-3');
      reserveForm.classList.remove('reserve__form-4');
      reserveForm.classList.add('reserve__form-5');
    }
  }
}
reserveNavigation();

function incrementDecrement() {
  const minusBtnTop = document.querySelector('.reserve__inner-minus-top');
  const inputTop = document.querySelector('.reserve__inner-input-top');
  const plusBtnTop = document.querySelector('.reserve__inner-plus-top');

  let thisValueTop = inputTop.value;

  minusBtnTop.addEventListener('click', function (event) {
    event.preventDefault();
    if (thisValueTop > 0) {
      --thisValueTop;
      inputTop.value = thisValueTop;
      console.log(thisValueTop);
    }
  });

  plusBtnTop.addEventListener('click', function (event) {
    event.preventDefault();
    ++thisValueTop;
    inputTop.value = thisValueTop;
    console.log(thisValueTop);
  });

  const minusBtnBottom = document.querySelector('.reserve__inner-minus-bottom');
  const inputBottom = document.querySelector('.reserve__inner-input-bottom');
  const plusBtnBottom = document.querySelector('.reserve__inner-plus-bottom');

  let thisValueBottom = inputBottom.value;

  minusBtnBottom.addEventListener('click', function (event) {
    event.preventDefault();
    if (thisValueBottom > 0) {
      --thisValueBottom;
      inputBottom.value = thisValueBottom;
      console.log(thisValueBottom);
    }
  });

  plusBtnBottom.addEventListener('click', function (event) {
    event.preventDefault();
    ++thisValueBottom;
    inputBottom.value = thisValueBottom;
    console.log(thisValueBottom);
  });
}
incrementDecrement();

function author() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML(
    'beforeend',
    `<a href="https://github.com/TheLeonStyle" class="author">https://github.com/TheLeonStyle</a>`,
  );
}
author();
