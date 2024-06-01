let modebtn= document.querySelector("#mode");
let currMode="light";

modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundImage="https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="aqua";
    }
})
console.log(currMode);