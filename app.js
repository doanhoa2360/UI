
   
function open_list() {
    var nav = document.querySelector(".header-menu-items");
    nav.classList.toggle("active");
  };


  $(document).ready(function(){
    $(".slider-img").slick({
        slidesToShow:4,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
    
      responsive:[
        {
            breakpoint:700,
            settings:{
                slidesToShow:1,
            }
        }
      ]
    });
  });
       