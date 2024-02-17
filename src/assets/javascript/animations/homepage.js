import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


if(document.querySelector(`[data-page="home"]`)) {

    function heroScrolls() {
      gsap.from("[data-headline]", {autoAlpha: 0, y:128, duration:2, clearProps: "all"})

      let tl = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: "[data-hero]",
            pin: true, // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "bottom top", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
      });
        
        // add animations and labels to the timeline
      tl
        .to("[data-hero-morph]", { borderRadius: 320 })
    }
    heroScrolls();

    function hoverImg () {
      const trigger = document.querySelector('[data-hover-1="trigger"]');
      const imgs = document.querySelector('[data-hover-1="img"]');

      function showImgs() {
        console.log('click')
        let tl = gsap.timeline({});
        tl
          .to(imgs, {autoAlpha:1, duration:1})
      }

      trigger.addEventListener('click', showImgs, false)
    }
    hoverImg();

}