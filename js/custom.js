$(document).ready(function(){

  /* Youtube-background js */
  $('[data-vbg]').youtube_background(); // 유튜브 실행

  /* scroll를 클릭하면 enchantenter--intro 섹션으로 스크롤하는 기능 */
  var position = $('.enchantenter--intro').offset(); // 변수 position에 .enchantenter--intro의 위치를 담든다.

  $('.scroll').click(function(){
    
    $('html, body').stop().animate({scrollTop: position.top}, 500); // 문서의 스크롤 위치를 애니메이션으로 이동시켜라(그 위치는 변수 position( .enchantenter--intro의 좌표값)의 top값)
  });

  /* header menu */
  $('li.lv1, ul.lv2').hover(function() {
    $(this).find('ul.lv2').stop().toggle(300);
  });

  $('ul.lv2 li').hover(function() {
    $(this).toggleClass('active');
  });

  /* trigger */
  $('.trigger--open, .trigger--close').click(function(){
    $('.hidden--nav').toggleClass('active');
    $('html, body').toggleClass('active');
  });

  /* content */
  $('.content .accodian--menu').click(function() {
    $('.content').toggleClass('active');
    $('.content').children('.lv2').toggleClass('active');
  });

  /* enchantenter--image slide */
  const swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
  });

  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50, 
    loop: true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {

      320: { // 화면의 넓이가 320px 이상일 때
        slidesPerView: 2,  
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1024: { // 화면의 넓이가 1024px 이상일 때
        slidesPerView: 3,  
        slidesPerGroup: 3,
        spaceBetween: 40,
      },
    },
  });


});