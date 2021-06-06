
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
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});

//スクロールすると横から出てくる処理
$(function() {
    var appear = false;
    var share = $('.share_btn');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {  //200pxスクロールしたら
        if (appear == false) {
          appear = true;
          share.stop().animate({
            'right': '16px' //右から16pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          share.stop().animate({
            'right': '-200px' //右から-200pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }

    //以下フッター手前で止まる処理
    scrollHeight = $(document).height(); //ドキュメントの高さ
    scrollPosition = $(window).height() + $(window).scrollTop();//現在地 
    footHeight = $('footer').innerHeight();//footerの高さ（＝止めたい位置）
   
    if ( scrollHeight - scrollPosition  <= footHeight ) {//ドキュメントの高さと現在地の差がfooterの高さ以下になったら
        share.css({ //cssを書き換える
            'position':'absolute',//pisitionをabsolute（親：wrapperからの絶対値）に変更
            'bottom':footHeight,//下からfooterの高さ 
        });
    } else {
        share.css({ //スクロールして上に戻った場合は元に戻る
          'position':'fixed',
          'bottom':'24px',
        });
        }
    });
});

var tab = new Swiper('.tab-content', {
  //タブコンテンツ
  slidesPerView: 1,
  autoHeight: true, 
  
  //タブメニュー
  thumbs: {
      swiper: {
          el: '.tab-menu',
          slidesPerView: 2,
      }
  },
});
