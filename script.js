"use strict";
window.addEventListener("DOMContentLoaded", itsLoaded);
let arrow;
let block_button_arr;

function itsLoaded() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  block_button_arr = document.querySelectorAll(".block-button");
  block_button_arr.forEach((btn) => {
    btn.addEventListener("click", btnclicked);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  document.querySelectorAll(".arrow").forEach((arrow) => {
    arrow.addEventListener("mouseenter", arrowActive);
    arrow.addEventListener("mouseleave", arrowInactive);
  });
  document.querySelector(".btn-contact").addEventListener("click", btnclicked);
  document.querySelector(".q-contact").addEventListener("click", btnclicked);
}

function arrowActive(evt) {
  const timeline = gsap.timeline({ paused: true });
  timeline.to(evt.target.querySelector(".v-line1"), {
    rotation: -45,
    x: 13,
    y: 3.5,
    duration: 0.5,
  });
  timeline.to(
    evt.target.querySelector(".v-line2"),
    {
      rotation: 45,
      x: 13,
      y: -3.2,
      duration: 0.5,
    },
    "-=0.5"
  );
  if (!timeline.isActive()) {
    timeline.play(0);
  }
}
function arrowInactive(evt) {
  const timeline = gsap.timeline({ paused: true });
  timeline.to(evt.target.querySelector(".v-line1"), {
    rotation: 0,
    x: 0,
    y: 0,
    duration: 0.5,
  });
  timeline.to(
    evt.target.querySelector(".v-line2"),
    {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 0.5,
    },
    "-=0.5"
  );
  if (!timeline.isActive()) {
    timeline.play(0);
  }
}

// scroll animations
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".anim-h",
    start: "center bottom",
  },
});

tl.from(".anim-h", { y: -50, opacity: 0, duration: 2, ease: "back.out(1.7)" });

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".linkedin-div",
    start: "top center",
  },
});
tl1
  .from(".about-h1", { y: 300, opacity: 0, duration: 1 })
  .from(".about-h3", { y: 300, opacity: 0, duration: 1 }, "-=0.5")
  .from(".btn-contact", { y: 300, opacity: 0, duration: 1 }, "-=0.5")
  .from(".about-graphic", { x: 300, opacity: 0, duration: 1 }, "-=0.5");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".right1",
    start: "center bottom",
  },
});

tl2
  .from(".right1", { x: -300, opacity: 0, duration: 1 })
  .from(".left1", { x: 300, opacity: 0, duration: 0.8 })
  .from(".right2", { x: -300, opacity: 0, duration: 0.7 })
  .from(".left2", { x: 300, opacity: 0, duration: 0.5 });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "top 75%",
  },
});
tl3.from("#contact", { y: -100, opacity: 0, duration: 0.5 });
function btnclicked(evt) {
  console.log("see what happens");
  window.open(evt.target.dataset.link, "_blank");
}
