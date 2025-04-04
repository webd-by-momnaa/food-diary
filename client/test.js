// function data (){
//     return ()=>{
//         console.log("hello")
//     }
// }
// data()()

// function greet(name) {
//     return function(message) {
//         console.log(`${message}, ${name}!`);
//     };
// }
// greet("hello")("ali")

// var check = () =>{
//     return console.log(("hello"))
// }
// check()

// function data (){
//     return () => {
//         console.log("hello")
//     }
// }
// data()()




function greet(name){
    return () => {
      console.log("hello world")
    }
}
greet()()