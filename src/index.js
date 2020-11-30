import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".hero_circle, .hero_square, .hero_square-2", {
  transformOrigin: "50% 50%",
  scale: 0
})
function grow (element) {
  let heroTL = gsap.timeline()
heroTL.to(element, {
  stagger: { amount: 0.2 },
  autoAlpha: 1,
  scale: 1,
  ease: "back.out(1.7)",
})
  return heroTL
} 
let heroMain = gsap.timeline()
    heroMain.add(grow(".hero_circle"))
    heroMain.add(grow(".hero_square"))
    heroMain.add(grow(".hero_square-2"))

// example of single timelines
let aboutTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%",
    end: "center 50%",
    markers: true,
    scrub: 2
  }
});
aboutTL.from(".move", { scale: 0, duration: 1 });

let workTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".work",
    start: "top 50%",
    end: "50% 50%",
    markers: true,
    scrub: 2
  }
});
workTL.from(".work_example", {
  stagger: { amount: 0.2 },
  ease: "back.out(1.7)",
  x: -200,
  scale: 0,
  rotate: 360,
  duration: 1
});



// Example of combining reuseable functions to create a main timeline. 
function lineAnimation (line) {
 let tl = gsap.timeline();
  tl.from(
    line,
    { stagger: { amount: 0.2 }, ease: "back.out(1.7)", scaleX: 0, duration: 1}
  )
  return tl
}
function paraAnimation (para) {
 let paraTL = gsap.timeline();
   paraTL.from(
    para,
    { transformOrigin: "50% 50%", scale: 0, x: -200, duration: 1 }
  )
  return paraTL
}

let thoughtsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".thoughts",
    start: "top 50%",
     end: "50% 50%",
     markers: true,
    scrub: 2
  }
});
thoughtsTL.add("start");
thoughtsTL.add(paraAnimation(".thoughts_paragraph-1"),"start")
.add(paraAnimation(".thoughts_paragraph-2"),"start+=0.2")
.add(lineAnimation(".line_1"),"start+=0.2")
.add(lineAnimation(".line_2"),"start")
