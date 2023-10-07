function locomotivecode() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();

}
locomotivecode();

gsap.to(".nav1 svg", {
    transform: "translateY(-130%)",
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start: "top 0",
        end: "top -5",
        scrub:1
    }
})

gsap.to(".nav2 .links", {
    transform: "translateY(-128%)",
    opacity:0,
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start: "top 0",
        end: "top -5",
        scrub:1
    }
})

function videoAnimation() {
    var video = document.querySelector(".video-container")
    var play = document.querySelector("#play")

    video.addEventListener("mouseenter", function () {
        gsap.to(play, {
            opacity: 1,
            scale: 1
        })
    })

    video.addEventListener("mouseleave", function () {
        gsap.to(play, {
            opacity: 0,
            scale: 0
        })
    })

    video.addEventListener("mousemove", function (dets) {
        gsap.to(play, {
            top: dets.y - 55,
            left: dets.x - 40
        })
    })
}
videoAnimation();

function loadingAnimation() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from(".page1 .video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
    })
}
loadingAnimation();

gsap.from(".page2 #card", {
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 1,
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 600",
        // end:"top -5",
        scrub:true
    }
})

gsap.from(".page3 .child", {
    opacity: 0,
    delay: 1,
    duration: 0.5,
    // stagger: 1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top -250",
        // end:"top -5",
        scrub:true
    }
})

document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        left: dets.x,
        top: dets.y
    })
})
document.querySelectorAll(".child").forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
            transform: "translate(-50%, -50%)",
            scale: 1
        })
    })
}
)
document.querySelectorAll(".child").forEach((elem) => {
    elem.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            transform: "translate(-50%, -50%)",
            scale: 0
        })
    })
}
)