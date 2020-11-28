new fullpage ('#fullpage',{
    autoScrolling: true,
    navigation: true,
    menu:'#menu',
    onLeave : (origin,destination,direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = gsap.timeline({delay:0.5});
        tl.fromTo(title,0.5,{y:"50",opacity:0 },{y:0,opacity:1});
        if(destination.index === 1){
            const chair = document.querySelectorAll(".chair")
            const description = document.querySelector('.description')
            
            tl.fromTo(chair,0.5,{x:'100%'},{x:'0%'})
            .fromTo(chair[0],2,{opacity:1},{opacity:1})
            .fromTo(chair[1],2,{opacity:0},{opacity:1})
            .fromTo(chair[2],2,{opacity:0},{opacity:1})
            .fromTo(chair[3],2,{opacity:0},{opacity:1})

          
        }
        if(destination.index === 2){
            const vid = document.querySelector(".video-div")
            const description = document.querySelector('.description')
            
            tl.fromTo(vid,0.5,{x:'200%'},{x:'0%'})
            

          
        }
    }
});

const card = document.querySelector('.card')
const container = document. querySelector('.container')
const title = document. querySelector('.title');
const sneaker = document. querySelector('.sneaker img');
const purchase = document. querySelector('.purchase button');
const description = document. querySelector('.info h3')
const size = document. querySelector('.size');
const size_button1 = document.querySelector('.size_button1');
const size_button2 = document.querySelector('.size_button2');
const size_button3 = document.querySelector('.size_button3');
const size_button4 = document.querySelector('.size_button4');
const size_button = document.querySelectorAll('.size_button');

//Moving animation event
container.addEventListener('mousemove',(e) =>{
    //console.log("hey");
    let xAxis  = (window.innerWidth/2 - e.pageX)/25;
    let yAxis  = (window.innerHeight/2 - e.pageY)/25;
    //console.log(xAxis, yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
function change_active(button){
    for(let i = 0;i<4;i++){
        if(size_button[i].className.toString().includes("active")){

            size_button[i].classList.remove("active")
        }
    }
    button.classList.add("active");
}

window.onclick = e =>{
    if(e.target.tagName === "BUTTON"){
    button_clicked = e.target.classList[1];
    if(button_clicked.toString().includes("size")){
        change_active(e.target)
    }
}
}


//Animate In
container.addEventListener('mouseenter',e =>{
    card.style.transition = 'none';
    //popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    size.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

})



//Animate Out
container.addEventListener('mouseleave',(e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    size.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

