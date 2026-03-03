let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn")
let hide=document.querySelector(".hide");
let turn0=true;//playerX,playerY
let isWin=false;
let newgamebtn=document.querySelector("#new-game")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#winner")
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText='X'
            turn0=false;
        }
        else{
            box.innerText='0'
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const checkwinner=()=>{
    for(let i=0;i<8;i++){
        if((boxes[winpatterns[i][0]].innerText===boxes[winpatterns[i][1]].innerText)&&(boxes[winpatterns[i][1]].innerText===boxes[winpatterns[i][2]].innerText)&&boxes[winpatterns[i][2]].innerText!=""){
            console.log("winner:",boxes[winpatterns[i][0]].innerText);
            let winner=boxes[winpatterns[i][0]].innerText;
            isWin=true;
            showwinner(winner);
        }
    }
}
resetbtn.addEventListener("click",()=>{
    for(box of boxes){
       box.innerText="";
       box.disabled=false;
    }
})
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(box of boxes){
       box.disabled=true;
    }
}
newgamebtn.addEventListener("click",()=>{
msgContainer.classList.add("hide");
    for(box of boxes){
       box.innerText="";
       box.disabled=false;
    }
})