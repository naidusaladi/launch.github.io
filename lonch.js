const imgEl=document.getElementById("image")
const imgSec=document.getElementById("imgs")
const buttonEl=document.querySelector(".btn")
const popupEl=document.getElementById("popup")
const person1=document.querySelector(".person1")
const person2=document.querySelector(".person2")
const oEl=document.querySelectorAll(".o")
const nameEl=document.querySelector(".name-text")
const secondname=document.querySelector(".secondname")
const thirdname=document.querySelector(".thirdname")
person2.disabled=true
buttonEl.disabled=true


function redirection(){
   buttonEl.style.display="none"
   imgEl.style.display="none"
   person1.style.display="none"
   person2.style.display="none"
   popupEl.style.display="block"
   for(let i=0;i<10;i++){
       oEl[i].style.display="none"
   }
   

   
   let i=1
   let intervel=null;
   function hello(){
       window.location.href="https://aktechnologies.in/"
   }
   function hi(){
       clearTimeout(intervel)
      
       const intr=setTimeout(hello(),12000);
   }
   intervel=setInterval(() => {
    popupEl.style.left=`${i}%`
    i++;
    if(i>35){
        hi()
    }
    
   }, 20);
  
   

}


buttonEl.addEventListener("click",()=>{
    imgEl.src='rocketfinal1 (1).gif'
    imgEl.style.height="750vh"
    buttonEl.style.background="orange"
    nameEl.style.display="none"

    const timeout = setTimeout(redirection,3800);
})

person1.addEventListener("click",()=>{
    thirdname.style.animationPlayState="running"
    person1.style.background="red"
    let inc=0;
    const interval = setInterval(()=>{
        let str=`.mns${inc}`
        const oEl=document.querySelector(str)
        inc++
        
        oEl.style.color="red"

        if(inc>4){
            clearInterval(interval)
        }
    },400)
    const intvel=setInterval(()=>{
        person2.disabled=false
    },2400)
    
})

person2.addEventListener("click",()=>{
    secondname.style.animationPlayState="running"
    person2.style.background="#08EE08"
    let inc=0;
    const interval = setInterval(()=>{
        let str=`.mnss${inc}`
        const oE2=document.querySelector(str)
        inc++
        
        oE2.style.color="#08EE08"

        if(inc>4){
            clearInterval(interval)
        }
    },400)
    const intv=setInterval(()=>{
        buttonEl.style.background="#01377f"
        buttonEl.disabled=false
    },2000)
    

})