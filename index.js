
let tl = gsap.timeline({defaults:{ease:"power1.out"}});


/* import Highway from '@dogstudio/highway';
import Fade from './js/transition'
import nodemon from 'nodemon';
const H = new Highway.Core({
    transitions:{
        default:Fade
    }
}); */


let imgs = document.querySelectorAll(".img-gallery img");
  let images_ = {
    infin11:{
      img1:"../images/infin12/IMG_20210616_143859.jpg",
      img2:"../images/infin12/IMG_20210616_143928.jpg",
      img2:"../images/infin12/IMG_20210616_144031.jpg",
      
    },
    infin12:{
      img1:"./images/infin12/IMG_20210616_143859.jpg",
      img2:"./images/infin12/IMG_20210616_143928.jpg",
      img2:"./images/infin12/IMG_20210616_144031.jpg",
      
    },
    infin13:{
      img1:"./images/infin13/image_2021-08-11_09-01-07.png",
      img2:"./images/infin13/IMG_20210615_090959.jpg",
      img3:"./images/infin12/IMG_20210615_090959.jpg",
      
    },
    infin15:{
      img1:"./images/eco-park/20210508_164105.jpg",
      img2:"./images/eco-park/20210508_164228.jpg",
      img3:"./images/eco-park/20210508_164223.jpg",
      
    },
    infin23:{
      img1:"./images/eco-park/20210508_164105.jpg",
      img2:"./images/eco-park/20210508_164228.jpg",
      img3:"./images/eco-park/20210508_164223.jpg",
      
    },
    infin24:{
      img1:"./images/infin24/20210508_161537.jpg",
      img2:"./images/infin24/IMG_20210508_161026.jpg",
      img3:"./images/infin24/20210508_161537.jpg",
      
    },
    infin41:{
      img1:"./images/infin41/20210508_162534.jpg",
      img2:"./images/infin41/20210508_162534.jpg",
      img3:"./images/infin41/20210508_162534.jpg",
      
    },
    infin42:{
      img1:"./images/infin42/image_2021-08-11_09-03-18.png",
      img2:"./images/infin42/image_2021-08-11_09-03-56.png",
      img3:"./images/infin42/image_2021-08-11_09-04-17.png",
      
    },
    /* infin11:{
      img1:"./images/infin12/IMG_20210616_143859.jpg",
      img2:"./images/infin12/IMG_20210616_143928.jpg",
      img2:"./images/infin12/IMG_20210616_144031.jpg",
      
    }, */
  }
  /* **************************
    IMAGES
      **************************
  */
  let selectEl = document.querySelector("select");
  let selectedOp = selectEl.options[selectEl.selectedIndex].value;
      
      
      if(selectedOp === "infin12"){
        imgs[0].src = images_.infin12.img1;
        imgs[1].src = images_.infin12.img2;
        imgs[2].src = images_.infin12.img2;
      }
      if(selectedOp === "infin13"){
        
      }
      if(selectedOp === "infin15"){
        
      }
      if(selectedOp === "infin23"){
        
      }
      if(selectedOp === "infin24"){
        
      }
      if(selectedOp === "infin41"){
        
      }
      if(selectedOp === "infin42"){
        
      }
      
let section_btn = document.querySelector(".section-btn");
let btns = document.querySelectorAll(".btn-container button");

let proBtn = document.querySelector(".pro");
let proBookBtn = document.querySelector(".probook");
function smoothScroll(target,duration){
  let target_ = document.querySelector(target);
  let targetPosition = target_.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  function animationScroll(currentTime){
    if(startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animationScroll);
  }
  function ease(t,b,c,d){
    t /= d / 2;
    if(t<1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t -2)- 1) + b;
  }
  requestAnimationFrame(animationScroll);
}

proBtn.addEventListener("click",(e)=>{
  
  
  tl.to(".prostudy",{
    display:"flex",
    duration:0,
    minHeight:"70vh"
  });
  smoothScroll(".ratings",1000)
  tl.to(".ratings",{
    display:"flex",
    duration:0
  })
  tl.to(".select",{
    display:"block",
    duration:0
  })
  tl.to(".img-gallery img",{
    display:"inline-block",
    duration:0
  })
  
  
})
proBookBtn.addEventListener("click",()=>{
  tl.to('.prostudy',{
    minHeight:0,
    display:'none',
    duration:0
  })
  
  tl.to('.img-gallery img',{
    display:"none",
    duration:0
  })
  tl.to('.section',{
    height:"90vh",
    duration:0
  });
  tl.to(".ratings",{
    display:"none",
    duration:0
  })
  tl.to(".select",{
    display:"none",
    duration:0
  })
})
tl.fromTo('.big-text',{
  opacity:0,
  y:"15%"
},{
  opacity:1,
  y:"0%",
  duration:1,
  transition:"all 1s ease-in-out",
  stagger:0.25
})
  
  tl.fromTo('.section-text',{
    opacity:0,
    translateY:"10px"
  },{
    opacity:1,
    translateY:"0px",
    duration:1
  })

// text animation
/* let text_ = document.querySelector(".section-text");



let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
 text_.classList.add("fade")
  char++;
}
function complete(){
  clearInterval(timer);
  timer = null
} */
let selection = document.querySelector("select");
let ratings = document.querySelector(".ratings");

selection.addEventListener("change",(e)=>{
    let selected = selection.options[selection.selectedIndex].value;
    let img_g = document.querySelector(".img-gallery");
    
    tl.to('.img-gallery',{
      display:"grid",
      duration:0
    })
    let video = document.querySelectorAll("video");
    let group_title = document.querySelector(".ratings h1");
    video.forEach((video)=>{
      video.pause();
    })
    console.log(selected); 
    if(selected === 'infin11'){
      tl.to('.infin11',{
        display:"flex",
        opacity:1,
        flexDirection:"column",
        duration:0,
      },
        imgs[0].src = images_.infin11.img1,
        imgs[1].src = images_.infin11.img2,
        imgs[2].src = images_.infin11.img1,
      group_title.textContent = selection.options[selection.selectedIndex].text
      
      )
      tl.to('.infin12',{
        display:"none",
        opacity:0,
        
        duration:0
      }),
      tl.to('.infin13',{
        display:"none",
        opacity:0,
        
        duration:0
      }),
      tl.to('.infin15',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin23',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin24',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin41',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin42',{
        display:"none",
        opacity:0,
        duration:0
      })
    }
     if(selected === 'infin12'){
      tl.to('.infin12',{
        display:"flex",
        opacity:1,
        duration:0,
        
      },group_title.textContent = selection.options[selection.selectedIndex].text,
        imgs[0].src = images_.infin12.img1,
        imgs[1].src = images_.infin12.img2,
        imgs[2].src = images_.infin12.img2,
      
      ),tl.to(".infin11",{
        display:"none",
        opacity:0,
        flexDirection:"column",
        duration:0
      })
      tl.to('.infin13',{
        display:"none",
        opacity:0,
        
        duration:0
      }),
      tl.to('.infin15',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin23',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin24',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin41',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin42',{
        display:"none",
        opacity:0,
        duration:0
      })
    }
    if(selected === 'infin13'){
      tl.to('.infin13',{
        display:"flex",
        opacity:1,
        duration:0.5,
        stagger:0.25,
        duration:0
      },group_title.textContent = selection.options[selection.selectedIndex].text),
      imgs[0].src = images_.infin13.img1;
      imgs[1].src = images_.infin13.img2;
      imgs[2].src = images_.infin13.img2;
      tl.to('.infin11',{
        display:"none",
        opacity:0,
        flexDirection:"column",
        duration:0
      }),
      tl.to('.infin12',{
        display:"none",
        opacity:0,
        duration:0
      }),
      
      tl.to('.infin15',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin23',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin24',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin41',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin42',{
        display:"none",
        opacity:0,
        duration:0
      })
    }
    if(selected === 'infin15'){
      tl.to('.infin15',{
        display:"flex",
        opacity:1,
        duration:0,
        
      },group_title.textContent = selection.options[selection.selectedIndex].text),
      imgs[0].src = images_.infin15.img1;
      imgs[1].src = images_.infin15.img2;
      imgs[2].src = images_.infin15.img3;
      tl.to('.infin11',{
        display:"none",
        opacity:0,
        flexDirection:"column",
        duration:0
      }),
      tl.to('.infin12',{
        display:"none",
        opacity:0,
        duration:0
      }),
      tl.to('.infin13',{
        display:"none",
        opacity:0,duration:0
      }),
     
      tl.to('.infin23',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin24',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin41',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin42',{
        display:"none",
        opacity:0,duration:0
      })
    }
    if(selected === 'infin23'){
      tl.to('.infin23',{
        display:"flex",
        opacity:1,
        duration:0,
       
      },group_title.textContent = selection.options[selection.selectedIndex].text),
      imgs[0].src = images_.infin23.img1;
      imgs[1].src = images_.infin23.img2;
      imgs[2].src = images_.infin23.img3;
      tl.to('.infin11',{
        display:"none",
        flexDirection:"column",
        opacity:0,duration:0
      }),
      tl.to('.infin12',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin13',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin15',{
        display:"none",
        opacity:0,duration:0
      }),
      
      tl.to('.infin24',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin41',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin42',{
        display:"none",
        opacity:0,duration:0
      })
    }
    if(selected === 'infin24'){
      tl.to('.infin24',{
        display:"flex",
        opacity:1,
        flexDirection:"column",
        duration:0,
        
      },group_title.textContent = selection.options[selection.selectedIndex].text),
      imgs[0].src = images_.infin24.img1;
      imgs[1].src = images_.infin24.img2;
      imgs[2].src = images_.infin24.img3;
      tl.to('.infin11',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin12',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin13',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin15',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin23',{
        display:"none",
        opacity:0,duration:0
      }),
      
      tl.to('.infin41',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin42',{
        display:"none",

        opacity:0,duration:0
      })
    }
    if(selected === 'infin41'){
      tl.to('.infin41',{
        display:"flex",
        flexDirection:"column",
        opacity:1,
        duration:0,
       
      },group_title.textContent = selection.options[selection.selectedIndex].text),
        imgs[0].src = images_.infin41.img1,
        imgs[1].src = images_.infin41.img1,
        imgs[2].src = images_.infin41.img1,
      tl.to('.infin11',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin12',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin13',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin15',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin23',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin24',{
        display:"none",
        opacity:0,duration:0
      }),
      
      tl.to('.infin42',{
        display:"none",
        opacity:0,duration:0
      })
    }
    if(selected === 'infin42'){
      tl.to('.infin42',{
        display:"flex",
        opacity:1,
        duration:0,
        
      },group_title.textContent = selection.options[selection.selectedIndex].text),
        imgs[0].src = images_.infin42.img1,
        imgs[1].src = images_.infin42.img2,
        imgs[2].src = images_.infin42.img3,
      tl.to('.infin11',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin12',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin13',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin15',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin23',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin24',{
        display:"none",
        opacity:0,duration:0
      }),
      tl.to('.infin41',{
        display:"none",
        opacity:0,duration:0
      })
      
      
      
        
      
    } 
  })
  
  

tl.to('.text',{
  y:'0%',
  duration:1,
  stagger:0.25
})
tl.to('.intro',{
  y:"-100%",
  duration:1,
  delay:0.5
})
tl.fromTo('nav',{
  opacity:0
},{
  opacity:1,duration:1,
}

)
tl.fromTo('.section-text',{
  opacity:0,
  transform:"translateY(-10%)"
},{
  opacity:1,
  transform:"translateY(0%)",
  duration:0.5,
  delay:0.5
  
})
