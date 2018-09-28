'use strict';

window.app.data = (function () {
  var photoData = [];
  photoData = generateData();

  function generateData() {
    var QUANTITY = 25;

    var COMMENTS = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ];

    var DESCRIPTIONS = [
      'Тестим новую камеру!',
      'Затусили с друзьями на море',
      'Как же круто тут кормят',
      'Отдыхаем...',
      'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
      'Вот это тачка!'
    ];

    return Array.from({length: QUANTITY}, function (_currentItem, index) {
      return {
        url: 'photos/' + (index + 1) + '.jpg',
        likes: window.app.utils.generareRandomInteger(200, 15),
        comments: Array.from({length: window.app.utils.generareRandomInteger(2, 1)}, function () {
          return COMMENTS[window.app.utils.generareRandomInteger(COMMENTS.length - 1)];
        }),
        description: DESCRIPTIONS[window.app.utils.generareRandomInteger(DESCRIPTIONS.length - 1)]
      };
    });
  }

  return {
    get: function (photoId) {
      return photoId ? photoData[photoId] : photoData;
    },
    update: function () {
      photoData = generateData();
    }
  };
})();
