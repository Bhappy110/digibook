$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.card-deck').offset().top - 500) {
      $('.card-deck .card').each(function(i){
        setTimeout(function(){
          $('.card-deck .card').eq(i).addClass('muncul');
        }, 300 *(i+1));
      });
    }


})