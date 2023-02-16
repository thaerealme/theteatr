const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const afishaArr = [
  {
    title: 'под одеялом',
    date: '2, 3 февраля',
    time: '19:00, 20:00',
    src: './images/afisha/afisha-blanket.jpg'
  },
  {
    title: 'под одеялом',
    date: '4, 5 февраля',
    time: '18:00, 20:00',
    src: './images/afisha/afisha-blanket.jpg'
  },
  {
    title: 'запретные монологи v',
    date: '8 февраля',
    time: '20:00',
    src: './images/afisha/afisha-monologi.jpg'
  },
  {
    title: 'стоп sex',
    date: '10 февраля',
    time: '20:00',
    src: './images/afisha/afisha-stopsex.jpg'
  },
  {
    title: 'раненные фрейдом',
    date: '11 февраля',
    time: '19:00',
    src: './images/afisha/afisha-freid.jpg'
  },
  {
    title: 'саундтрек моей жизни',
    date: '12 февраля',
    time: '19:00',
    src: './images/afisha/afisha-soundtrack.jpg'
  },
  {
    title: 'новый набор',
    date: '13, 14 февраля',
    time: '19:00',
    src: './images/afisha/afisha-nabor.jpg'
  },
  {
    title: 'идеальное тело',
    date: '17 февраля',
    time: '20:00',
    src: './images/afisha/afisha-ideal.jpg'
  },
  {
    title: 'водка, е#ля, телевизор',
    date: '18 февраля',
    time: '19:00',
    src: './images/afisha/afisha-vodka.jpg'
  },
  {
    title: 'запретные монологи v',
    date: '19 февраля',
    time: '19:00',
    src: './images/afisha/afisha-monologi.jpg'
  },
  {
    title: 'стоп sex',
    date: '22 февраля',
    time: '20:00',
    src: './images/afisha/afisha-stopsex.jpg'
  },
  {
    title: 'моя собака бросила пить в четверг',
    date: '24 февраля',
    time: '20:00',
    src: './images/afisha/afisha-dog.jpg'
  },
  {
    title: 'запретные монологи v',
    date: '25 февраля',
    time: '19:00',
    src: './images/afisha/afisha-monologi.jpg'
  },
  {
    title: 'урод',
    date: '26 февраля',
    time: '19:00',
    src: './images/afisha/afisha-urod.jpg'
  },
];
const afisha = document.querySelector('.afisha');
const afishaTemplate = afisha.querySelector('.afisha-template').content;

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger_opened');
  mobileMenu.classList.toggle('mobile-menu_opened')
});

function createAfisha(item) {
  const template = afishaTemplate.cloneNode(true);
  const afishaItem = template.querySelector('.afisha__item');
  afishaItem.querySelector('.afisha__title').textContent = item.title;
  afishaItem.querySelector('.afisha__date').textContent = item.date;
  afishaItem.querySelector('.afisha__time').textContent = item.time;
  afishaItem.style.backgroundImage = `url(${item.src})`;
  return afishaItem;
}

afishaArr.forEach((item) => {
  const element = createAfisha(item);
  afisha.append(element);
});
