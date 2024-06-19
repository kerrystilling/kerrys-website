import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

// Create
let mm = gsap.matchMedia();

//Hero Animation
function heroAnimate () {
  const duration = 0.5;
  const offset = "=-0.25";
  let tl = gsap.timeline({});
    tl
      .set(['[data-hero-shape-1]', '[data-hero-shape-2]', '[data-hero-shape-3]'], { opacity: 0, rotation: 0 }, 0 )
      .set(['[data-hero-word-1]', '[data-hero-word-2]', '[data-hero-word-3]', '[data-hero-word-4]', '[data-hero-word-5]', '[data-hero-word-6]', '[data-hero-word-7]', '[data-hero-word-8]','[data-hero-word-9]'], { opacity: 0, rotation: 0 }, 0 )
      .to('[data-hero-word-1]',  { opacity: 1, duration: duration }, duration)
      .to('[data-hero-shape-1]', { opacity: 1, rotation: -45, duration: duration }, `${offset}`)
      .to('[data-hero-word-2]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-word-3]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-word-4]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-word-5]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-shape-2]', { opacity: 1, rotation: 90, duration: duration }, `${offset}`)
      .to('[data-hero-word-6]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-word-7]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-shape-3]', { opacity: 1, rotation: 90, duration: duration }, `${offset}`)
      .to('[data-hero-word-8]',  { opacity: 1, duration: duration }, `${offset}`)
      .to('[data-hero-word-9]',  { opacity: 1, duration: duration }, `${offset}`);
}
heroAnimate();

//Section 2 Images on Scroll - Desktop
function section2AnimateD () {
  const duration = 0;
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: '[data-img-trigger]',
      start: "top bottom",
      end: 'bottom top',
    },
  });
  
  tl
    .to('[data-s2-img-1]', {x: -500, y: -400, rotation: -15}, '-=1')
    .to('[data-s2-img-2]', {x: 280, y: 240, rotation: 6}, '-=1')
    .to('[data-s2-img-3]', {x: 380, y: -270, rotation: 5}, '-=1')
    .to('[data-s2-img-4]', {x: -360, y: -260, rotation: -8}, '-=1')
}

//Section 2 Images on Scroll - Mobile
function section2AnimateM () {
  const duration = 0;
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: '[data-img-trigger-m]',
      start: "top top",
      end: 'bottom top',
    },
  });
  
  tl
    .to('[data-s2-img-1]', {x: -200, y: -180, rotation: -15}, '-=1')
    .to('[data-s2-img-2]', {x: 40, y: 190}, '-=1')
    .to('[data-s2-img-3]', {x: 120, y: -160, rotation: 5}, '-=1')
    .to('[data-s2-img-4]', {x: -100, y: -100, rotation: 0}, '-=1')
}

// Hover images
function hoverImg () {
  const triggers = document.querySelectorAll('[data-hover-img');

  triggers.forEach(trigger => {
    const image = trigger.querySelector('[data-hover-img-el]',);

    function showImgs() {
      console.log('hover')
      let tl = gsap.timeline({});
      tl
        .to(image, {autoAlpha: 1, duration: .25})
        .to(image, {rotation: 0, duration: .5, ease: "elastic.out(1,0.5)"}, '=-0.25')
    }
  
    function hideImgs() {
      console.log('mouseout')
      let tl = gsap.timeline({});
      tl
        .to(image, {autoAlpha:0, duration:.125})
        .to(image, {rotation: 15}, '=-0.125')
    }
  
    trigger.addEventListener('mouseenter', showImgs, false)
    trigger.addEventListener('mouseout', hideImgs, false)
  })

}
hoverImg();

// Desktop Animations
mm.add("(min-width: 768px)", () => {
  section2AnimateD();
});

// Mobile Animations
mm.add("(max-width: 767px)", () => {
  //section2AnimateM();
});