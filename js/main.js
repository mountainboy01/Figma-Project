/* NAV SCROLLSPY  */ 
  $(window).scroll(function(){
     $('nav').toggleClass('scrolled',$(this).scrollTop() >200); 
    });

/* NAV SCROLLSPY  END */

/* NAV TOGGLE ICON */ 

let btn = document.querySelector(".toggle");
                    let icon = btn.querySelector(".fa-bars");

                    btn.onclick = function(){
                      if(icon.classList.contains("fa-bars")){
                        icon.classList.replace("fa-bars","fa-times");
                      }

                      else{
                        icon.classList.replace("fa-times","fa-bars");
                      }
                    }

/* NAV TOGGLE ICON END*/ 



/***** CLIENT LOGO *****/

            jQuery(document).ready(function () {
                var clientSwiper = new Swiper('.client_swiper', {
                    loop: true,
                    speed: 500,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-button-next.clients',
                        prevEl: '.swiper-button-prev.clients',
                    },
                    pagination: {
                        el: '.swiper-pagination.clients',
                        clickable: true,
                    },
					
					breakpoints: {
               991: {
                    noSwiping: false,
                    allowSlidePrev: false,
                    allowSlideNext: false,
                    slidesPerView: 0,
                    spaceBetween: 0,
                  
               
                },
				
				768: {
                    noSwiping: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                    slidesPerView: 2,
                    spaceBetween: 0,
                  
                  
                },
				
                640: {
                    noSwiping: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                  
                  
                }
            }
			
                });
            }); 


/***** CLIENT LOGO END*****/

/***** TESTIMONIAL START*****/

            jQuery(document).ready(function () {
                var testimonialSwiper = new Swiper('.testimonial_swiper', {
                    loop: true,
                    speed: 500,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-button-next.testimonials',
                        prevEl: '.swiper-button-prev.testimonials',
                    },
                    pagination: {
                        el: '.swiper-pagination.testimonials',
                        clickable: true,
                    }
                });
            });

/***** TESTIMONIAL END*****/

/*    SCROLL TOP     */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})   

/*    SCROLL TOP END     */