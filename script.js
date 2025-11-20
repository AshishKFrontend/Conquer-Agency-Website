function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")
    var page4Content = document.querySelector("#page4") 
    var cursor = document.querySelector("#cursor")
    
    function cursorMoveHandler(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    }

    page1Content.addEventListener("mousemove", cursorMoveHandler)
    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
        cursor.classList.remove('black-cursor');
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })

    if(page4Content) { 
        page4Content.addEventListener("mousemove", cursorMoveHandler)
        page4Content.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1
            })
            cursor.classList.add('black-cursor');
        })
        page4Content.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0
            })
            cursor.classList.remove('black-cursor');
        })
    }
}

function page2Animation() {
    gsap.from(".elem h1", {
        y: '100', 
        stagger: 0.2,
        duration: 1,
        lazy: false, 
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 80%",
            end: "top 30%",
            scrub: 2
        }
    })
}

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true, 
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
     autoplay: {
        delay: 1100,
        disableOnInteraction: false,
      },
    });
}
   
function loaderAnimation(){
    var tl = gsap.timeline()

tl.from("#loader h3",{
    x : 40,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    stagger:0.1,
    duration:1
})
tl.to("#loader",{
    opacity:0,
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.3,
    delay:-0.5
})
tl.to("#loader",{
    display:"none"  
})
}

function footerAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 60%",
            end: "top 30%",
            scrub: 2
        }
    });

    tl.from("#footer-center h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        scale: 0.9
    }, "a")
    
    tl.from("#footer-top div", {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
    }, "a")
    
    tl.from("#footer-bottom", {
        opacity: 0,
        duration: 1
    }, "a")
}

function menuPanelEffect() {
    const menuTrigger = document.querySelector('#menu-trigger');
    const menuPanel = document.querySelector('#menu-panel');
    
    const tl = gsap.timeline({ paused: true });

    tl.to(menuPanel, {
        x: '0%',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
    })
    .from('.menu-item a, .menu-subtext', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power1.out',
    }, "-=0.2");

    let closeTimer;
    const CLOSE_DELAY = 300;

    menuTrigger.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        tl.timeScale(1).play();
    });

    menuTrigger.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => {
            if (!menuPanel.matches(':hover')) {
                tl.timeScale(1.5).reverse();
            }
        }, CLOSE_DELAY);
    });

    menuPanel.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
    });

    menuPanel.addEventListener('mouseleave', () => {
        clearTimeout(closeTimer);
        tl.timeScale(1.5).reverse();
    });
}


loaderAnimation();
locoScroll();
cursorEffect();
page2Animation();
sliderAnimation();
footerAnimation();
menuPanelEffect();