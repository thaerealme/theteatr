const root = document.querySelector('.root');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

const afishaArr = [
  {
    title: 'Под одеялом',
    date: '2, 3 февраля',
    time: '19:00, 20:00',
    src: './images/afisha/afisha-blanket.jpg',
    genre: 'Спектакль-ощущение',
    director: 'Артём Самигуллин',
    author: 'Антон Бескоровайный',
    actors: 'труппа the ТЕАТР',
    duration: '1 час 30 минут',
    description: `Закрой глаза. Расслабься. Семь вздохов.
    А теперь ответь: Что ты прячешь под одеялом? Какие тайны и секреты остануться с тобой навсегда?
    Спектакль-ощущения "ПОД ОДЕЯЛОМ" откроет перед тобой новое измерение.
    Тонкий мир, где нарушаются привычные правила и устанавливается четкий балланс.
    Мир, в котором наконец-то каждому из нас станет по-настоящему тепло.
    Проект «the ТЕАТР» представляет свой самый популярный спектакль "ПОД ОДЕЯЛОМ".
    Спектакль в котором ты станешь не зрителем в зале, а путешественником в пространстве.
    Один на один с нашими персонажами и их любовью.`,
    images: ['./images/specs/odeyalo/1.jpg'],
  },
  {
    title: 'Под одеялом',
    date: '4, 5 февраля',
    time: '18:00, 20:00',
    src: './images/afisha/afisha-blanket.jpg',
    genre: 'Спектакль-ощущение',
    director: 'Артём Самигуллин',
    author: 'Антон Бескоровайный',
    actors: 'труппа the ТЕАТР',
    duration: '1 час 30 минут',
    description: `Закрой глаза. Расслабься. Семь вздохов.
    А теперь ответь: Что ты прячешь под одеялом? Какие тайны и секреты остануться с тобой навсегда?
    Спектакль-ощущения "ПОД ОДЕЯЛОМ" откроет перед тобой новое измерение.
    Тонкий мир, где нарушаются привычные правила и устанавливается четкий балланс.
    Мир, в котором наконец-то каждому из нас станет по-настоящему тепло.
    Проект «the ТЕАТР» представляет свой самый популярный спектакль "ПОД ОДЕЯЛОМ".
    Спектакль в котором ты станешь не зрителем в зале, а путешественником в пространстве.
    Один на один с нашими персонажами и их любовью.`,
    images: ['./images/specs/odeyalo/1.jpg'],
  },
  {
    title: 'Запретные монологи V',
    date: '8 февраля',
    time: '20:00',
    src: './images/afisha/afisha-monologi.jpg',
    genre: 'Секреты женской анатомии',
    director: 'Артём Самигуллин',
    author: 'Ив Энцлер',
    actors: 'Тамара Адамова, Анастасия Речистер, Карина Нутфуллина',
    duration: '1 час 45 минут',
    description: `Это спектакль о любви. О принятии каждой частички своего тела,
    в особенности той самой частички о которой мы стыдливо молчим,
    но которая таит в себе целую Вселенную.
    На спектакле «Запретные монологи V» с вами не побоятся говорить о самых секретных темах.
    Этот спектакль исцеляет сердца миллионов женщин, помогает им принять себя без робости и стеснения, дарит вдохновение жить.
    Этот спектакль помогает понять мужчине то, какой секрет таит в себе самая чувственная и нежная часть тела любимой женщины.`,
    images: ['./images/specs/monologi/1.jpg', './images/specs/monologi/2.jpg', './images/specs/monologi/3.jpg'],
  },
  {
    title: 'Стоп sex',
    date: '10 февраля',
    time: '20:00',
    src: './images/afisha/afisha-stopsex.jpg',
    genre: 'Эротическая комедия',
    director: 'Руслан Абраров',
    author: 'Аристофан',
    actors: 'Тамара Адамова, Валентина Щиблева, Зария Муратова, Элина Гарданова, Алина Султанова',
    duration: '1 час 30 минут',
    description: `«Все мужики - козлы»
    Согласны ли вы с этим выражением?
    Или например, «Женщина - это слабый пол»?
    Всё это уже давно стало мифом в современном мире.
    Так вот. Наша новая премьера это спектакль о сильных и независимых женщинах разных эпох.
    Давным-давно, ещё до нашей эры, когда шли бесконечные войны и мужчины сражались на копьях, одна мудрая особа собрала всех женщин и предложила забастовку,
    отказав мужчинам в сексе. И что же вышло из этого?
    Вы узнаете на нашей сногсшибательной эротической комедии «СТОП SEX»!`,
    images: ['./images/specs/stopsex/1.jpg', './images/specs/stopsex/2.jpg', './images/specs/stopsex/3.jpg'],
  },
  {
    title: 'Раненные фрейдом',
    date: '11 февраля',
    time: '19:00',
    src: './images/afisha/afisha-freid.jpg',
    genre: 'Брутальная комедия',
    director: 'Артём Самигуллин',
    author: 'Антон Бескоровайный',
    actors: 'Влад Нурисламов, Денис Канзафаров, Элина Гарданова, Рамир Махмутов, Расуль Ягудин',
    duration: '2 часа с антрактом',
    description: `О чем наша брутал комедия?
    Как ни странно, друзья, но она о семье.
    О родителях и их детях. «Раненные Фрейдом» -это спектакль о наших душевных травмах, о том как простить своё детство,
    отпустить обиды, понять и принять своих родителей,
    полюбить и начать жить по-настоящему свободно. И всё это в духе Тарантино и Гая Ричи.
    Смешно, сексуально, остро и самое главное - честно!`,
    images: ['./images/specs/freid/1.jpg', './images/specs/stopsex/2.jpg', './images/specs/stopsex/3.jpg'],
  },
  {
    title: 'Саундтрек моей жизни',
    date: '12 февраля',
    time: '19:00',
    src: './images/afisha/afisha-soundtrack.jpg',
    genre: 'Тело, музыка, текст',
    director: 'Тамара Адамова',
    author: 'Живая речь',
    actors: 'труппа the ТЕАТР',
    duration: '1 час 30 минут',
    description: `В прогрессе`,
    images: ['./images/specs/soundtrack/1.jpg', './images/specs/soundtrack/2.jpg', './images/specs/soundtrack/3.jpg'],
  },
  {
    title: 'Новый набор',
    date: '13, 14 февраля',
    time: '19:00',
    src: './images/afisha/afisha-nabor.jpg',
    genre: 'Набор в театральную студию',
    director: 'the ТЕАТР',
    author: 'the ТЕАТР',
    actors: ' ',
    duration: ' ',
    description: `В процессе`,
    images: ['./images/specs/classes/1.jpg', './images/specs/classes/2.jpg', './images/specs/classes/3.jpg', './images/specs/classes/4.jpg'],
  },
  {
    title: 'Идеальное тело',
    date: '17 февраля',
    time: '20:00',
    src: './images/afisha/afisha-ideal.jpg',
    genre: 'Натурально-естественный спектакль',
    director: 'Артём Самигуллин',
    author: 'Ив Энцлер',
    actors: 'Тамара Адамова, Анастасия Речистер, Мария Зверева, Анастасия Рассказова, Лилия Ахмадиева, Лидия Леонтьева, Алина Аюпова',
    duration: '1 час 20 минут',
    description: `Тема тела в наше время приобрела невероятные обороты.
    Все будто сошли с ума и только и думают как бы его «починить», «усовершенствовать» или «уничтожить».
    В погоне за идеалами мы перестали его слушать, перестали его слышать.
    Что же такое «идеальное тело»? Чего мы хотим добиться в этой борьбе с ним?
    И о каком ещё «принятии себя» все вокруг так твердят?
    На этом спектакле мы вместе с несравненной Ив Энцлер постараемся ответить на эти вопросы и поговорим, возможно, на самую важную тему нашего времени.
    Берите свои животы, носы, бока, губы, ягодицы и так далее. И вперёд к нам. На спектакль «Идеальное тело».`,
    images: ['./images/specs/ideal/1.jpg', './images/specs/ideal/2.jpg', './images/specs/ideal/3.jpg'],
  },
  {
    title: 'Водка, е#ля, телевизор',
    date: '18 февраля',
    time: '19:00',
    src: './images/afisha/afisha-vodka.jpg',
    genre: 'Экзистенциальная комедия',
    director: 'Алсу Галина',
    author: 'Максим Курочкин',
    actors: 'Руслан Абраров, Олег Кириллов, Денис Канзафаров, Влад Нурисламов',
    duration: '1 час',
    description: `Экзистенциальная комедия
    Это история о мужчине, который переживает тяжелый кризис.
    Он вдруг резко понимает, что в жизни нужно что то менять. Менять срочно и менять к лучшему.
    Он чувствует, что нужно наконец начать заниматься йогой, плаваньем, перейти на сыроедение и заняться спортом.
    А для этого ему нужно отказаться от одного из своих трех самых любимых вещей, а именно от Водки, от Е#ли или от Телевизора.
    Чтобы принять правильное решение, наш герой решает поговорить с этими прекрасными существами и сделать правильный выбор.
    И тут то начинается самое интересное...`,
    images: ['./images/specs/vodka/1.jpg', './images/specs/vodka/2.jpg', './images/specs/vodka/3.jpg'],
  },
  {
    title: 'Запретные монологи v',
    date: '19 февраля',
    time: '19:00',
    src: './images/afisha/afisha-monologi.jpg',
    genre: 'Секреты женской анатомии',
    director: 'Артём Самигуллин',
    author: 'Ив Энцлер',
    actors: 'Тамара Адамова, Анастасия Речистер, Карина Нутфуллина',
    duration: '1 час 45 минут',
    description: `Это спектакль о любви. О принятии каждой частички своего тела,
    в особенности той самой частички о которой мы стыдливо молчим,
    но которая таит в себе целую Вселенную.
    На спектакле «Запретные монологи V» с вами не побоятся говорить о самых секретных темах.
    Этот спектакль исцеляет сердца миллионов женщин, помогает им принять себя без робости и стеснения, дарит вдохновение жить.
    Этот спектакль помогает понять мужчине то, какой секрет таит в себе самая чувственная и нежная часть тела любимой женщины.`,
    images: ['./images/specs/monologi/1.jpg', './images/specs/monologi/2.jpg', './images/specs/monologi/3.jpg'],
  },
  {
    title: 'Стоп sex',
    date: '22 февраля',
    time: '20:00',
    src: './images/afisha/afisha-stopsex.jpg',
    genre: 'Эротическая комедия',
    director: 'Руслан Абраров',
    author: 'Аристофан',
    actors: 'Тамара Адамова, Валентина Щиблева, Зария Муратова, Элина Гарданова, Алина Султанова',
    duration: '1 час 30 минут',
    description: `«Все мужики - козлы»
    Согласны ли вы с этим выражением?
    Или например, «Женщина - это слабый пол»?
    Всё это уже давно стало мифом в современном мире.
    Так вот. Наша новая премьера это спектакль о сильных и независимых женщинах разных эпох.
    Давным-давно, ещё до нашей эры, когда шли бесконечные войны и мужчины сражались на копьях, одна мудрая особа собрала всех женщин и предложила забастовку,
    отказав мужчинам в сексе. И что же вышло из этого?
    Вы узнаете на нашей сногсшибательной эротической комедии «СТОП SEX»!`,
    images: ['./images/specs/stopsex/1.jpg', './images/specs/stopsex/2.jpg', './images/specs/stopsex/3.jpg'],
  },
  {
    title: 'Моя собака бросила пить в четверг',
    date: '24 февраля',
    time: '20:00',
    src: './images/afisha/afisha-dog.jpg',
    genre: 'Грязный реализм',
    director: 'Алсу Галина',
    author: 'Чарльз Буковски',
    actors: 'Расуль Ягудин, Денис Канзафаров, Рамир Махмутов',
    duration: '1 час',
    description: `Спектакль со странным названием, который перевернёт вообще представление о театре в целом.
    «Моя собака бросила пить в четверг» это спектакль где стираются грань между сценой и зрительным залом.
    Вы вместе с актёрами окунётесь в давно забытые эмоции,чувства и события: Первая любовь, первый секс и алкоголь, предательство и первая Вера в себя.
    Это спектакль который поможет вам избавиться от своих стереотипов и стать чуточку свободнее.`,
    images: ['./images/specs/dog/1.jpg', './images/specs/dog/2.jpg', './images/specs/dog/3.jpg'],
  },
  {
    title: 'Запретные монологи v',
    date: '25 февраля',
    time: '19:00',
    src: './images/afisha/afisha-monologi.jpg',
    genre: 'Секреты женской анатомии',
    director: 'Артём Самигуллин',
    author: 'Ив Энцлер',
    actors: 'Тамара Адамова, Анастасия Речистер, Карина Нутфуллина',
    duration: '1 час 45 минут',
    description: `Это спектакль о любви. О принятии каждой частички своего тела,
    в особенности той самой частички о которой мы стыдливо молчим,
    но которая таит в себе целую Вселенную.
    На спектакле «Запретные монологи V» с вами не побоятся говорить о самых секретных темах.
    Этот спектакль исцеляет сердца миллионов женщин, помогает им принять себя без робости и стеснения, дарит вдохновение жить.
    Этот спектакль помогает понять мужчине то, какой секрет таит в себе самая чувственная и нежная часть тела любимой женщины.`,
    images: ['./images/specs/monologi/1.jpg', './images/specs/monologi/2.jpg', './images/specs/monologi/3.jpg'],
  },
  {
    title: 'Урод',
    date: '26 февраля',
    time: '19:00',
    src: './images/afisha/afisha-urod.jpg',
    genre: 'Чёрная комедия',
    director: 'Артём Самигуллин',
    author: 'Мариус фон Майенбург',
    actors: 'Денис Канзафаров, Тамара Адамова, Сергей Самыловский, Рамир Махмутов',
    duration: '1 час 30 минут',
    description: `«Быть» или «казаться»?
    Наш спектакль об этом. О том, что каждый день мы принимаем выбор на какую сторону вступить.
    Каждый час мы ощущаем или не можем ощутить себя «собой». И каждую ночь мы лежим и думаем: «а Я ли это? Моя ли это жизнь?».
    Но приходит следующий день и мы снова заглядываем в шкафчик с нашими масками и принимаем решение: что мне сегодня надеть?
    Главному герою спектакля Летте отказали в престижной командировке потому что он выглядит не очень привлекательно.
    Ради достижения своих целей, Летте делает пластическую операцию, которая меняет его жизнь.`,
    images: ['./images/specs/urod/1.jpg', './images/specs/urod/2.jpg', './images/specs/urod/3.jpg'],
  },
];

const afisha = document.querySelector('.afisha');
const afishaTemplate = afisha.querySelector('.afisha-template').content;

const afishaPopup = document.querySelector('.popup_type_afisha');
const closeButtons = document.querySelectorAll('.popup__close-button');
const afishaImages = afishaPopup.querySelector('.popup__images');

const imagePopup = document.querySelector('.popup_type_image');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger_opened');
  mobileMenu.classList.toggle('mobile-menu_opened');
  root.classList.toggle('overflow');
});

function createAfisha(item) {
  const template = afishaTemplate.cloneNode(true);
  const afishaItem = template.querySelector('.afisha__item');
  afishaItem.querySelector('.afisha__title').textContent = item.title;
  afishaItem.querySelector('.afisha__date').textContent = item.date;
  afishaItem.querySelector('.afisha__time').textContent = item.time;
  afishaItem.querySelector('.afisha__image').src = item.src;
  afishaItem.querySelector('.afisha__image').alt = item.title;
  afishaItem.addEventListener('click', function (evt) {
    afishaPopup.querySelector('.popup__title').textContent = item.title;
    afishaPopup.querySelector('.popup__genre').textContent = item.genre;
    afishaPopup.querySelector('.popup__director').textContent = item.director;
    afishaPopup.querySelector('.popup__author').textContent = item.author;
    afishaPopup.querySelector('.popup__actors').textContent = item.actors;
    afishaPopup.querySelector('.popup__duration').textContent = item.duration;
    afishaPopup.querySelector('.popup__description').textContent = item.description;
    afishaPopup.querySelector('.popup__title').textContent = item.title;
    item.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('popup__image-item');
      afishaPopup.querySelector('.popup__images').append(img);
    });
    openPopup(afishaPopup);
  });
  return afishaItem;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  root.classList.add('overflow');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  root.classList.remove('overflow');
  while (afishaImages.firstChild) {
    afishaImages.removeChild(afishaImages.firstChild);
  }
}

afishaArr.forEach((item) => {
  const element = createAfisha(item);
  afisha.append(element);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
