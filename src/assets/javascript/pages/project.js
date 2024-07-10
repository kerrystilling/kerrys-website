import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

// Create
let mm = gsap.matchMedia();

// Marquee Animation
function projectMarquee () {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: '[data-marquee-trigger]',
        start: "top top",
        end: 'bottom top',
      },
    });
    
    tl
      .to('[data-marquee-title]', {x: 0})
  }

  mm.add("(min-width: 768px)", () => {
    projectMarquee();
  });