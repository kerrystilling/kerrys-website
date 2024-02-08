import { gsap } from "gsap";

if(document.querySelector(`[data-page="home"]`)) {
    gsap.from("[data-headline]", {autoAlpha: 0, y:128, duration:2, clearProps: "all"})
}