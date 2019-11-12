var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый него степриимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var types = ['palace', 'flat', 'house', 'bungalo'];
var checkins = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


var randomPrice = function() {
    return Math.floor(Math.random() * 999999);
};

var randomItem = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

var randomNumber = function(arr) {
    var randNum = Math.floor(Math.random() * arr.length); 
    return randNum;
};

    var singleFeatures = [];
var generateFeatures = function(arr) {
    for(var i=0;i<=arr.length;i++){
        singleFeatures.push(features[i]);
    }
    return singleFeatures;
};

function generateArrayRandomNumber (min, max) {
    var totalNumbers        = max - min + 1,
        arrayTotalNumbers   = [],
        arrayRandomNumbers  = [],
        tempRandomNumber;
    while (totalNumbers--) {
        arrayTotalNumbers.push(totalNumbers + min);
    }
    while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
    }
    return arrayRandomNumbers;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var map = document.querySelector('.map');
var mapPins = document.querySelector('.map__pins');
map.classList.remove('map--faded');
var height = window.getComputedStyle(mapPins, null).getPropertyValue('height');
var width = window.getComputedStyle(mapPins, null).getPropertyValue('width');


var near = [
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description1',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description2',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description3',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description4',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description5',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description6',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description7',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    },
    {
        'author': { 
            'avatar': 'img/avatars/user0' + randomItem(generateArrayRandomNumber(1,8)) + '.png',
        }, 
        'offer': {
            'title': titles[randomItem(generateArrayRandomNumber(0, titles.length))], 
            'address': "'"+ location['x'] +" ," + location['y'] + "'", 
            'price': randomPrice(),
            'type': randomItem(types),
            'rooms': randomItem(generateArrayRandomNumber(1, 5)),
            'guests': randomItem(generateArrayRandomNumber(1, 10)),
            'checkin':randomItem(checkins),
            'checkout': randomItem(checkins),
            'features': generateFeatures(generateArrayRandomNumber(1, randomNumber(features))),
            'description': 'description8',
            'photos': shuffle(photos),
        },
        'location': {
            'x': randomItem(generateArrayRandomNumber(0, parseInt(width, 10))),
            'y': randomItem(generateArrayRandomNumber(0, parseInt(height, 10))),
        }
    }
];

var t = document.querySelector('template').content.querySelector('.map__pin');

if ('content' in document.createElement('template')) {
    var btn = document.querySelector('template').content.querySelector('.map__pin');
    var list = document.querySelector(".map__pins");
    for(var i = 0;i<near.length;i++) {
        var el = btn.cloneNode(true);

        el.setAttribute('style', 'top: calc('+ near[i].location['y'] +'px - 62px); left: '+ near[i].location['x'] +'px;');
        el.querySelector('img').setAttribute('src', near[i].author['avatar']);
        el.querySelector('img').setAttribute('alt', near[i].offer['title']);

        list.appendChild(el);
    }
} 
else {
    console.log('Do not support tag template in your browser!');
}

if ('content' in document.createElement('template')) {
    var article = document.querySelector('template').content.querySelector('.map__card');
    var articleWr = document.createElement('span'); 
    var container = document.querySelector('.map__filters-container');
    var parent = document.querySelector('.map');
    var articleList = parent.insertBefore(articleWr, container);

    for(var i = 0;i<near.length;i++) {
        var articleEl = article.cloneNode(true);

        near[i].offer['address'] = near[i].location['x'] + 'px ' + near[i].location['y'] + 'px';
        articleEl.setAttribute('style', 'top: calc('+ near[i].location['y'] +'px - 62px); left: '+ near[i].location['x'] +'px;');
        articleEl.querySelector('img').setAttribute('src', near[i].author['avatar']);
        articleEl.querySelector('img').setAttribute('alt', near[i].offer['title']);
        articleEl.querySelector('.popup__title').textContent = near[i].offer['title'];
        articleEl.querySelector('.popup__address').textContent = near[i].offer['address'];
        articleEl.querySelector('.popup__price').textContent = near[i].offer['price'] + ' ₽/ночь';

        switch(near[i].offer['type']) {
            case 'flat': 
                articleEl.querySelector('.popup__type').textContent = 'Квартира';
                break;
            case 'bungalo':
                articleEl.querySelector('.popup__type').textContent = 'Бунгало';
                break;
            case 'house':
                articleEl.querySelector('.popup__type').textContent = 'Дом';
                break;
            case 'palace':
                articleEl.querySelector('.popup__type').textContent = 'Дворец';
                break;
            default:
                articleEl.querySelector('.popup__type').textContent = 'Жильё';
                break;
        }

        articleEl.querySelector('.popup__capacity').textContent = near[i].offer['rooms'] + ' комнаты для ' + near[i].offer['guests'] + ' гостей';
        articleEl.querySelector('.popup__time').textContent = 'Заезд после ' + near[i].offer['checkin'] + ', выезд до ' + near[i].offer['checkout'];
        articleEl.querySelector('.description').textContent = near[i].offer['description'];

        var picturesWr = articleEl.querySelector('.popup__pictures');
        var photos = near[i].offer['photos'];
        var li = picturesWr.querySelector('li');

        for(var e=0;e<photos.length;e++) {
            // picturesWr.querySelector('img').setAttribute('src', photos[e]);
            // li.querySelector('img').setAttribute('src', photos[e]);
            var cloneLi = li.cloneNode(true);
            cloneLi.querySelector('img').setAttribute('src', photos[e]);
            picturesWr.appendChild(cloneLi);

        }

        // var countLi = picturesWr.querySelectorAll('li');
        // for(var n=0;n<countLi.length;n++) {
            // li.querySelector('img').setAttribute('src', photos[n]);
            // picturesWr.querySelector('img').setAttribute('src', photos[n]);
            // console.log('hello');
        // }

        // var featuresArr = near[i].offer['features'];
        // var featuresWr = articleEl.querySelector('.popup__features');

        // for(var f=0; f<featuresArr.length; f++){
        //     if (featuresArr[f].textContent == 'wi-fi') {
        //             featuresWr.querySelector('.feature--wifi').style.display = 'inline-block';
        //     }
        //     switch(featuresArr[f].textContent) {
        //         case 'wi-fi': 
        //             featuresWr.querySelector('.feature--wifi').style.display = 'inline-block';
        //             break;
        //         case 'dishwasher':
        //             featuresWr.querySelector('.feature--dishwasher').style.display = 'inline-block';
        //             break;
        //         case 'parking':
        //             featuresWr.querySelector('.feature--parking').style.display = 'inline-block';
        //             break;
        //         case 'washer':
        //             featuresWr.querySelector('.feature--washer').style.display = 'inline-block';
        //             break;
        //         case 'elevator':
        //             featuresWr.querySelector('.feature--elevator').style.display = 'inline-block';
        //             break;
        //         case 'conditioner':
        //             featuresWr.querySelector('.feature--conditioner').style.display = 'inline-block';
        //             break;
        //         default:
        //             break;
        //     }
        // }



        articleList.appendChild(articleEl);
    }
} 
else {
    console.log('Do not support tag template in your browser!');
}

// console.log(near[0].offer['address']);