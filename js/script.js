$(document).ready(function() {
    $(".block1__search .search input").click(function() {
        $(".search__result").toggle()
    })

    $(".popup__checkbox1 label").click(function() {
    	$('#popup__right2').hide();
    	$('#popup__right1').show();
    	$('#checkbox2').prop('checked', false);
    })
    
    $(".popup__checkbox2 label").click(function() {
    	$('#popup__right1').hide();
    	$('#popup__right2').show();
    	$('#checkbox1').prop('checked', false);
    })

    $(".header__nav ul li:nth-child(1)").click(function() {
    	$('.popup1').show()
    })

    $(".header__nav ul li:nth-child(2)").click(function() {
    	$('.popup2').show()
    })

    $('.popup__close').click(function() {
    	$('.popup').hide()
    })

    //Меню адаптив



    $('#nav-mob').click(function() {
        if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('inactive');
        $('.header__nav ul').hide()
        } else {
        this.classList.add('active');
        this.classList.remove('inactive');
        $('.header__nav ul').show()
        }
    })
});