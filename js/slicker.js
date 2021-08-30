	$(document).ready(function(){
    // Slick pour les categorie de la page d'acceuil
  $('.pbcCategories').slick({
    dots: true,
     slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:'<button class="sNav snNext"><i class="mdi mdi-arrow-left-drop-circle"></i></button>',
      nextArrow:'<button  class="sNav snPrev"><i class="mdi mdi-arrow-right-drop-circle"></i></button>',
       responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



// Slick pour les villes de la page d'accueil
$('.pbvVilles').slick({
    dots: true,
     slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:'<button class="sNav snNext"><i class="mdi mdi-arrow-left-drop-circle"></i></button>',
      nextArrow:'<button  class="sNav snPrev"><i class="mdi mdi-arrow-right-drop-circle"></i></button>',
       responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
  ]
  });


  

  // Slick pour les categorie du dashboard
$('.dashHomeCategorie').slick({
    dots: false,
     slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:false,
      nextArrow:false,
       responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



// Pour la page de visualisation de produit
$('.pdisGiant').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.pdisSmall'
  });
  $('.pdisSmall').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.pdisGiant',
    dots: false,
    prevArrow:false,
    nextArrow:false,
    centerMode: true,
    focusOnSelect: true
  });










});