
// slider
let slide_buttons = document.querySelectorAll(".btn-container button");
let image = document.querySelector(".img");

slide_buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        btn.classList.add("active-btn")
        let probook = document.querySelector(".probook");
        let podcasts = document.querySelector(".podcast");
        let prostudy = document.querySelector(".pro");
        let pro_text = prostudy.textContent;
        let pod_text = podcasts.textContent;
        let probook_text =  probook.textContent;
        probook.addEventListener("click",()=>{
            probook.classList.remove("opacity-0-6");
            prostudy.classList.add("opacity-0-6");
            podcasts.classList.add("opacity-0-6");
            podcasts.classList.remove("active-btn");
            prostudy.classList.remove("active-btn");
            image.classList.remove("pro-img");
            image.classList.remove("podcast-img");
            image.classList.add("probook-img");
            
           
        })
        prostudy.addEventListener("click",()=>{
            prostudy.classList.remove("opacity-0-6");
            probook.classList.add("opacity-0-6");
            podcasts.classList.add("opacity-0-6");
            podcasts.classList.remove("active-btn");
            probook.classList.remove("active-btn");
            image.classList.remove("probook-img");
            image.classList.remove("podcast-img");
            image.classList.add("pro-img");
        })
        podcasts.addEventListener("click",()=>{
            podcasts.classList.remove("opacity-0-6");
            prostudy.classList.add("opacity-0-6");
            probook.classList.add("opacity-0-6");
            prostudy.classList.remove("active-btn");
            probook.classList.remove("active-btn");
            image.classList.remove("pro-img");
            image.classList.remove("probook-img");
            image.classList.add("podcast-img");
        })
    })
});

/* slider items */
let items_list = { 
    proStudy:{
        title:"Infinity Pro Study",
        img:`./images/prostudy_emblem_png.png`,
        text:"We develop a passion for learning!"
    },
    proBook:{
        title:"Infinity Pro Book",
        img:`./images/probook.png`,
        text:"We develop a passion for teaching!"
    },
    podcast:{
        title:"Infinity Podcasts",
        img:"./images/podcast.jpg",
        text:"We develop a passion for listening!"
    },
}

// add event
let probook_ = document.querySelector(".probook");
let podcasts_ = document.querySelector(".podcast");
let prostudy_ = document.querySelector(".pro");

let text = document.querySelector(".section-text");
let title = document.querySelector(".big-text");
let section = document.querySelector(".section");
probook_.addEventListener("click",()=>{
    
    
    img.classList.remove("pro-img");
    img.classList.remove("podcast-img");
    img.classList.add("probook-img");
     text.textContent=items_list.proBook.text;
    title.textContent=items_list.proBook.title;
    
});
prostudy_.addEventListener("click",()=>{
    
     img.classList.remove("probook-img");
     img.classList.remove("podcast-img");
     img.classList.add("pro-img");
     text.textContent=items_list.proStudy.text;
    title.textContent=items_list.proStudy.title; 
});
podcasts_.addEventListener("click",()=>{
    img.classList.remove("pro-img");
    img.classList.remove("probook-img");
    img.classList.add("podcast-img");
   
    text.textContent=items_list.podcast.text;
    title.textContent=items_list.podcast.title; 
});


