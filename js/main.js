window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });



    /*  slide,click event section */

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        speed: 1200,
        // autoplay: {
        //     delay:3000,
        // },
        loop: true,
        parallax: true,

      });



      
      gsap.to('.fix-this-3', {
        // rotation: 360,
        x: -innerWidth*3,
        ease:'none',
            scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            // markers: true
        }
    });

    let sc03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03,
        trigger: "#section03",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });

    sc03.to(".no01",{x:100},0);
    sc03.to(".no02",{x:100},0.2);
    sc03.to(".no03",{x:100},0.4);
    sc03.to(".no04",{x:100},0.6);
 

})


