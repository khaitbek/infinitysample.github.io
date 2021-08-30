let tl_ = gsap.timeline({ defaults: { ease: "power1.out" } });
// add click event
let items = {
  proStudy: {
    title: "Infinity Pro Study",
    img: `./images/prostudy_emblem.svg`,
    text: "We develop a passion for learning!",
  },
  proBook: {
    title: "Infinity Pro Book",
    img: `./images/probook.png`,
    text: "We develop a passion for reading!",
  },
  podcast: {
    title: "Infinity Podcasts",
    img: "./images/podcast.jpg",
    text: "We develop a passion for listening!",
  },
};
function smoothScrollFunction(target, duration) {
  let target_ = document.querySelector(target);
  let targetPosition = target_.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animationScroll);
}
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("open");
  document.body.classList.toggle("stop-scroll");
});
let text = document.querySelector(".section-text");
let btn_container = document.querySelector(".btn-container");
let title = document.querySelector(".big-text");
let section = document.querySelector(".section");
// slider
let slide_btns = document.querySelectorAll(".btn-container button");

let img = document.querySelector(".img");

slide_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.add("active-btn");
    let probook = document.querySelector(".probook");
    let podcasts = document.querySelector(".podcast");
    let prostudy = document.querySelector(".pro");
    let pro_text = prostudy.textContent;
    let pod_text = podcasts.textContent;
    let probook_text = probook.textContent;
    probook.addEventListener("click", () => {
      probook.classList.remove("opacity-0-6");
      prostudy.classList.add("opacity-0-6");
      podcasts.classList.add("opacity-0-6");
      podcasts.classList.remove("active-btn");
      prostudy.classList.remove("active-btn");
      img.classList.remove("pro-img");
      img.classList.remove("podcast-img");
      img.classList.add("probook-img");
    });
    prostudy.addEventListener("click", () => {
      prostudy.classList.remove("opacity-0-6");
      probook.classList.add("opacity-0-6");
      podcasts.classList.add("opacity-0-6");
      podcasts.classList.remove("active-btn");
      probook.classList.remove("active-btn");

      img.classList.remove("probook-img");
      img.classList.remove("podcast-img");
      img.classList.add("pro-img");
      smoothScrollFunction(".ratings", 1000);
      tl_.to(".ratings", {
        display: "flex",
        duration: 0,
      });
    });
    podcasts.addEventListener("click", () => {
      podcasts.classList.remove("opacity-0-6");
      prostudy.classList.add("opacity-0-6");
      probook.classList.add("opacity-0-6");
      prostudy.classList.remove("active-btn");
      probook.classList.remove("active-btn");
      img.classList.remove("pro-img");
      img.classList.remove("probook-img");
      img.classList.add("podcast-img");
    });
  });
});
/* let study_buttons= document.querySelectorAll(".section-btn-study button a");
console.log(study_buttons);
study_buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("wtf");
    })
}) */

/* slider items */

// add event
let probook_ = document.querySelector(".probook");
let podcasts_ = document.querySelector(".podcast");
let prostudy_ = document.querySelector(".pro");

probook_.addEventListener("click", () => {
  img.classList.remove("pro-img");
  img.classList.remove("podcast-img");
  img.classList.add("probook-img");
  text.textContent = items.proBook.text;
  title.textContent = items.proBook.title;
});
prostudy_.addEventListener("click", () => {
  img.classList.remove("probook-img");
  img.classList.remove("podcast-img");
  img.classList.add("pro-img");

  console.log("probook");
  text.textContent = items.proStudy.text;
  title.textContent = items.proStudy.title;
});
podcasts_.addEventListener("click", () => {
  img.classList.remove("pro-img");
  img.classList.remove("probook-img");
  img.classList.add("podcast-img");

  text.textContent = items.podcast.text;
  title.textContent = items.podcast.title;
});

window.addEventListener("DOMContentLoaded", () => {});
let classes = ["pro-img", "probook-img", "podcast-img"];
let timer = 3000;
function changeImg() {
  let i = 0;
  img.classList.add(classes[i]);
  if (i < classes.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slide_btns.forEach((btn) => {
    btn.removeEventListener("click", () => {});
  });
}
window.onload = setTimeout(changeImg(), timer);
/* groups */
let group_stats = {
  infin11: {
    video: "./videos/2021MARCHMAYRATINGS!/INFIN11.mp4",
    img: "./videos/exam/INFIN11copy.jpg",
  },
};
