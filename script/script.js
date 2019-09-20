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