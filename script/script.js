
//Увеличение изображения

$(document).ready(function() { // Ждём загрузки страницы
	  $(".image").click(function(){	// Событие клика на маленькое изображение
	  	  var img = $(this);	// Получаем изображение, на которое кликнули
		    var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>");
		$(".popup").fadeIn(200); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			  $(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
        setTimeout(function() {	// Выставляем таймер
			      $(".popup").remove(); // Удаляем разметку всплывающего окна
			  }, 200);
		});
	});	
});









$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
})
$(".main").click(function() {
    if ($(".menu").hasClass("menu_active"))
        $('.menu').toggleClass('menu_active');
}) 



var items = document.querySelectorAll('h2');
items = Array.prototype.slice.call(items);
console.log(items);

function compareAge(personA, personB) {
    return personA.id - personB.id;
}

items.sort(compareAge);

console.log(items);
for(var i = 0; i < items.length; i++) {
    var newLi = document.createElement('li');
    newLi.innerHTML = '<a href="#'+ items[i].id + '"' + '>' + items[i].innerHTML + '</a>';
  
    list.appendChild(newLi);
}


//Плавная прокрутка до якоря.
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
});

(function($) {

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}








'use strict';
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
      _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
      _items = []; // массив элементов
    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: _items.length - 1,
    }

    var _transformItem = function (direction) {
      if (direction === 'right') {
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
          return;
        }
        if (!_sliderControlLeft.classList.contains('slider__control_show')) {
          _sliderControlLeft.classList.add('slider__control_show');
        }
        if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
          _sliderControlRight.classList.remove('slider__control_show');
        }
        _positionLeftItem++;
        _transform -= _step;
      }
      if (direction === 'left') {
        if (_positionLeftItem <= position.getMin) {
          return;
        }
        if (!_sliderControlRight.classList.contains('slider__control_show')) {
          _sliderControlRight.classList.add('slider__control_show');
        }
        if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
          _sliderControlLeft.classList.remove('slider__control_show');
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function (e) {
      var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
      e.preventDefault();
      _transformItem(direction);
    };

    var _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    // инициализация
    _setUpListeners();

    return {
      right: function () { // метод right
        _transformItem('right');
      },
      left: function () { // метод left
        _transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.slider')




