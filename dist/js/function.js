$(function(){
  $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top ;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});

gsap.utils.toArray(".fade").forEach(function(el){
    gsap.from(el, {
        duration: '0.6',
      ease: "Power2.easeIn",
      opacity:0,
      scale: 1.15,
      scrollTrigger: {
          trigger: el,
          start: 'top 60%'
      }
    });
  });

  $(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        $('.js-modal-close').addClass('open');
        modalLock();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        $('.js-modal-close').removeClass('open');
        modalLock();
        return false;
    });
});

//モーダル背景ロック
function modalLock(){
  let wrapper = $('#wrapper');
  let modalContents = $('.js-modal-close');
  let modal_open = modalContents.hasClass('open');
  if(modal_open) {
    open_position = $(window).scrollTop();
    wrapper.css({'width':'100%', 'position':'fixed', 'top': -(open_position)});
  } else {
    console.log(open_position);
    wrapper.attr('style','');
    $(window).scrollTop(open_position);
  }
}

$(function() {
    var appear = false;
    var share = $('.share_btn');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {  
        if (appear == false) {
          appear = true;
          share.stop().animate({
            'right': '16px' 
          }, 300); 
        }
      } else {
        if (appear) {
          appear = false;
          share.stop().animate({
            'right': '-200px'
          }, 300); 
        }
      }

    
    scrollHeight = $(document).height(); 
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $('footer').innerHeight();
   
    if ( scrollHeight - scrollPosition  <= footHeight ) {
        share.css({ 
            'position':'absolute',
            'bottom':footHeight, 
        });
    } else {
        share.css({ 
          'position':'fixed',
          'bottom':'24px',
        });
        }
    });
});

var tab = new Swiper('.tab-content', {
  //タブコンテンツ
  slidesPerView: 1,
  // autoHeight: true, 
  // autoWidth: true,
  
  //タブメニュー
  thumbs: {
      swiper: {
          el: '.tab-menu',
          slidesPerView: 2,
      }
  },
});
