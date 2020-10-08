"use strict";

/*-----------------------------------------
hamburger
----------------------------------------*/
$('.js-toggle-sp-menu').on('click', function () {
  $(this).toggleClass('active');
  $('.js-toggle-sp-menu-target').toggleClass('active');
}); //ボタン押されたら閉じる

$('.header-link').on('click', function () {
  $('.js-toggle-sp-menu-target').toggleClass('active');
});
/*-----------------------------------------
アコーディオン
----------------------------------------*/

$('.js-faq').on('click', function () {
  $(this).find('.js-faqA').stop().slideToggle(300);
});
/*-----------------------------------------
スライダー
----------------------------------------*/

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 20,
  breakpoints: {
    897: {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 56
    },
    481: {
      slidesPerView: 3,
      centeredSlides: true
    }
  }
});
var scroll = new SmoothScroll('a[href*="#"]', {
  header: '#header',
  speed: 1000
});
/*-----------------------------------------
アニメーション
----------------------------------------*/

new WOW().init();
/*-----------------------------------------
カウントアップ
----------------------------------------*/
//querySelectorは class,idどっちも取れる

var node = document.querySelector(".js-count-text"); // getElementByIdはidの取得

var counter = document.getElementById("js-show-count-text"); //document.querySelectorAll()もある
//.onとaddEventListenerは違う。
//処理が上書きされない

node.addEventListener("keyup", function () {
  var count = node.value.length;
  counter.innerText = count; //innertextはjsのプロパティ
});
/*---------------------------
バリデーションチェック
----------------------------------------*/

$(function () {
  var MSG_TEXT_MAX = '20文字以内で入力してください。';
  var MSG_EMPTY = '入力必須です。';
  var MSG_EMIL_TYPE = 'emailの形式ではありません。';
  var MSG_TEXTAREA_MAX = '100文字以内で入力してください。';
  /*-----------------------------------------
  name
  ----------------------------------------*/

  $(".js-valid-name").keyup(function () {
    var form_g = $(this).closest('.contact-item');

    if ($(this).val().length === 0) {
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMPTY);
    } else if ($(this).val().length > 20) {
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_TEXT_MAX);
    } else {
      $(this).removeClass('has-error').addClass('has-success');
      form_g.find('.error-msg').text('');
    }
  });
  /*-----------------------------------------
  Email
  ----------------------------------------*/

  $(".js-valid-email").keyup(function () {
    var form_g = $(this).closest('.contact-item');

    if ($(this).val().length === 0) {
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMPTY);
    } else if ($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMIL_TYPE);
    } else {
      $(this).removeClass('has-error').addClass('has-success');
      form_g.find('.error-msg').text('');
    }
  });
  /*-----------------------------------------
  コメント
  ----------------------------------------*/

  $(".js-valid-comment").keyup(function () {
    var form_g = $(this).closest('.contact-item');

    if ($(this).val().length === 0) {
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMPTY);
    } else if ($(this).val().length > 1000) {
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_TEXTAREA_MAX);
    } else {
      $(this).removeClass('has-error').addClass('has-success');
      form_g.find('.error-msg').text('');
    }
  }); //submiされた時にチェック

  $('.contact').submit(function () {
    if ($('.js-valid-name').val().length === 0 || $('.js-valid-email').val().length === 0 || $('.js-valid-comment').val().length === 0) {
      return false;
    } else if ($('.js-valid-name').val().length === 0) {
      var form_g = $('.js-valid-name').closest('.contact-item');
      $(this).removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMPTY);
      return false;
    } else if ($('.js-valid-email').val().length === 0) {
      var _form_g = $(".js-valid-email").closest('.contact-item');

      $(this).removeClass('has-success').addClass('has-error');

      _form_g.find('.error-msg').text(MSG_EMPTY);

      return false;
    } else if ($('.js-valid-comment').val().length === 0) {
      var _form_g2 = $(".js-valid-comment").closest('.contact-item');

      $(this).removeClass('has-success').addClass('has-error');

      _form_g2.find('.error-msg').text(MSG_EMPTY);

      return false;
    } else {
      submit();
    }
  });
});
$(function () {
  var pagetop = $('#page_top'); // ボタン非表示

  pagetop.hide(); // 100px スクロールしたらボタン表示

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});