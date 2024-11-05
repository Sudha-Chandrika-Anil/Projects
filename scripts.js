//console.log("running");
/*const array=["a","b","c","d"]
array.push("e")
const newArray=[...array,"f"];
console.log(newArray)*/

/*function newFunc(){
    console.log("Running");
}

newFunc();*/

/*const newFunc=()=>10

console.log(newFunc())*/

/*setInterval(()=>{
    console.log("Running");
},5000);*/

/*setTimeout(()=>{
    console.log("Running");
},2000);*/

const interval=setInterval(()=>{
    console.log("Running");
},1000);

setTimeout(()=>{
    clearInterval(interval);
},3000);