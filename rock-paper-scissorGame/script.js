const symbols=document.querySelectorAll(".symbol")
const uscr=document.querySelector("#userscr")
const cscr=document.querySelector("#compscr")
const msg=document.querySelector("#msg")
const newbtn=document.querySelector("#newbtn")
let userscore=0;
let compscore=0;
const generatechoice=()=>{
    let events=["rock","paper","scissors"]
   let i= Math.floor(Math.random()*3)
   let compchoice=events[i]
    return compchoice;
}
const playGame=(compchoice,userchoice)=>{
    if(compchoice===userchoice){
        msg.innerText="DRAW"
        msg.style.backgroundColor="#081b31"
    }
   else if((compchoice=="rock"&&userchoice=="scissors")||(compchoice=="paper"&&userchoice=="rock")||(compchoice=="scissors"&&userchoice=="paper")){
    compscore++;
    msg.innerText=`YOU LOSE! ${compchoice} beats ${userchoice}`
    msg.style.backgroundColor="red";
   }
   else{
    userscore++;
    msg.innerText=`YOU WIN! ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor="green"
   }
}
symbols.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id")
        console.log("user selected",userchoice)
        let compchoice1=generatechoice();
        console.log("computer selected",compchoice1)
        playGame(compchoice1,userchoice);
        uscr.innerText=userscore;
        cscr.innerText=compscore;
    })
})
newbtn.addEventListener("click",()=>{
    uscr.innerText=0;
    cscr.innerText=0;
    msg.innerText="Play Your Move"
})
