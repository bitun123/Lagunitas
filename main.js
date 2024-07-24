function show(){
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
    ScrollTrigger.refresh();}
    
    show()
    let tl2=gsap.timeline()
    tl2.from("#loader h3",{
      x:60,
      opacity:0,
      duration:1,
      stagger:0.2,
      delay:1
    
    })
    tl2.to("#loader h3",{
      opacity:0,
      x:-40,
      duration:1,
      stagger:-0.1
    })
    tl2.to("#loader",{
      opacity:0
    })
    tl2.to("#loader",{
      duration:1,
      display:"none"
    })
    gsap.to("#butole", {
      rotate: -15,
      scale:0.7,
      scrollTrigger: {
        trigger: "#butole",
        scroller: "#main",
        start: "top 5%",
        end: "top -415%",
        scrub: true,
        pin: true

      }
    })
 let tl =gsap.timeline();

 tl.from("#main #page1-dog",{
opacity:0,
duration:0.8,
scale:0.1,
delay:4.3
 })
    
tl.from("#butole",{
  opacity:0,
duration:1.5,
scale:0.1
})

