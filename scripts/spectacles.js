const root = document.querySelector('.root');
const spectaclesArr = [
  {
    title: 'Под одеялом',
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
    link: 'https://the-teatr.timepad.ru/events/',
  },
  {
    title: 'Раненные фрейдом',
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
    link: 'https://the-teatr.timepad.ru/event/2342907/',
  },
  {
    title: 'Саундтрек моей жизни',
    src: './images/afisha/afisha-soundtrack.jpg',
    genre: 'Тело, музыка, текст',
    director: 'Тамара Адамова',
    author: 'Живая речь',
    actors: 'труппа the ТЕАТР',
    duration: '1 час 30 минут',
    description: `Вроде бы все как всегда: сцена и зрительный зал,  который находится очень близко к актерам, что кажется будто вы  в эпицентре событий.
    Но именно этот спектакль и правда особенный.
    Он создан  по реальным событиям реальных людей.
    Это спектакль во время и после которого вы точно захотите петь, танцевать, слушать и слышать музыку.
    А ещё … вы услышите себя.
    Своё сердце, свои страхи, желания, мечты и стремления.
    И обещаем, что после просмотра этого спектакля вы легко и  пританцовывая наконец двинетесь своей жизни навстречу!`,
    images: ['./images/specs/soundtrack/1.jpg', './images/specs/soundtrack/2.jpg', './images/specs/soundtrack/3.jpg'],
    link: 'https://the-teatr.timepad.ru/event/2342812/',
  },
  {
    title: 'Идеальное тело',
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
    link: 'https://the-teatr.timepad.ru/event/2342806/',
  },
  {
    title: 'Водка, е#ля, телевизор',
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
    link: 'https://the-teatr.timepad.ru/event/2342789/',
  },
  {
    title: 'Стоп sex',
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
    link: 'https://the-teatr.timepad.ru/event/2342880/',
  },
  {
    title: 'Моя собака бросила пить в четверг',
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
    link: 'https://the-teatr.timepad.ru/event/2342788/',
  },
  {
    title: 'Запретные монологи v',
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
    link: 'https://the-teatr.timepad.ru/event/2342885/',
  },
  {
    title: 'Урод',
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
    link: 'https://the-teatr.timepad.ru/event/2313975/',
  },
  {
    title: 'Солнечная линия',
    src: './images/specs/liniya/1.jpg',
    genre: 'Бытовая треш драма',
    director: 'Алсу Галина',
    author: 'Иван Вырыпаев',
    actors: 'Артём Самигуллин, Тамара Адамова',
    duration: '1 час',
    description: `Комедия о любви.
    Невероятно яркий спектакль по пьесе Ивана Вырыпаева покорил сердца большой части наших зрителей и критиков международных фестивалей.
    И теперь движется дальше. Как понять и научиться пересекать собственную гордость и позволить себе перейти на сторону другого человека?
    Спектакль «Солнечная линия» это история о вселенской любви.
    О том, что мы можем быть безмерно далеки, когда находимся так близко к друг другу.`,
    images: ['./images/specs/liniya/1.jpg', './images/specs/liniya/2.jpg', './images/specs/liniya/3.jpg'],
    link: 'https://the-teatr.timepad.ru/events/',
  },
  {
    title: 'Лёша, который устроился на работу, на которой не платят',
    src: './images/specs/lesha/1.jpg',
    genre: 'Stand-Up Спектакль',
    director: 'Алсу Галина',
    author: 'Алексей Битюцких',
    actors: 'Тамара Адамова',
    duration: '1 час 10 минут',
    description: `Stand-Up спектакль
    А почему бы и нет? Если вкратце, то это безумно смешная и в тоже время грустная история девушки, которая вынуждена стала работать Вебкам моделью.
    А если честно, то это история о том, на что мы готовы пойти ради любви и ради достижения своих целей.
    Готовы ли вы переступить через себя, через свои принципы? Героиня спектакля расскажет вам о том, на что способна любовь в современных реалиях.`,
    images: ['./images/specs/lesha/1.jpg', './images/specs/lesha/2.jpg', './images/specs/lesha/3.jpg'],
    link: 'https://the-teatr.timepad.ru/event/2342895/',
  },
]

const spectacles = document.querySelector('.spectacles');
const spectaclesTemplate = spectacles.querySelector('.spectacles-template').content;

const spectaclesPopup = document.querySelector('.popup_type_spectacles');
const spectaclesImages = spectaclesPopup.querySelector('.popup__images');

const createCard = (item) => {
  const template = spectaclesTemplate.cloneNode(true);
  const spectaclesItem = template.querySelector('.spectacles__item');
  spectaclesItem.querySelector('.spectacles__title').textContent = item.title;
  spectaclesItem.querySelector('.spectacles__subtitle').textContent = item.genre;
  spectaclesItem.querySelector('.spectacles__image').src = item.src;
  spectaclesItem.querySelector('.spectacles__image').alt = item.title;
  spectaclesItem.addEventListener('click', function () {
    spectaclesPopup.querySelector('.popup__title').textContent = item.title;
    spectaclesPopup.querySelector('.popup__genre').textContent = item.genre;
    spectaclesPopup.querySelector('.popup__director').textContent = item.director;
    spectaclesPopup.querySelector('.popup__author').textContent = item.author;
    spectaclesPopup.querySelector('.popup__actors').textContent = item.actors;
    spectaclesPopup.querySelector('.popup__duration').textContent = item.duration;
    spectaclesPopup.querySelector('.popup__description').textContent = item.description;
    spectaclesPopup.querySelector('.button').href = item.link;
    item.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('popup__image-item');
      img.addEventListener('mousedown', () => {
        fullImage.src = src;
        fullImage.alt = item.title;
        fullImageDescription.textContent = item.title;
        openPopup(imagePopup);
      })
      spectaclesImages.append(img);
    });
    openPopup(spectaclesPopup);
  });
  return spectaclesItem;
}


spectaclesArr.forEach((item) => {
  const element = createCard(item);
  spectacles.append(element);
});


const clearImages = () => {
  while (spectaclesImages.firstChild) {
    spectaclesImages.removeChild(spectaclesImages.firstChild);
  }
}
