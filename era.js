/*function functionsum(a,b){
    return a*b;
}*/
/*const functionsum=(a,b)=>{
    s=a+b;
    return s;
}                                           //arrow function
let val=functionsum(500,7689);
console.log(val);
*/

//find number of vowel in string.
/*const functionvowel=(str)=>{
    let count=0;
    for (const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
        console.log(count);
    }
}*/

/*let nums=[2,3,4,5,6];
nums.forEach((val)=>{
    console.log(val*val);

});*/

/*let arr=[1,2,3,4,5,6,7,8,9,10];
let evennums=arr.filter((val)=>{
    return val%2===0;

});
console.log(evennums);
*/
/*
let nums=[1,2,3,4,5,6];
let numb=nums.reduce((result,current)=>{
    return  sum=result+current;
    
});
console.log(numb);
*/
/*let n=prompt("enter the value of n:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((prev,curr)=>{
    s= prev+curr;
    return s;
});
let fact=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(sum);
console.log(fact);
*/

let modebtn= document.querySelector("#mode");
let currMode="light";

modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="blue";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
})
console.log(currMode);
