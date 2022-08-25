// function duckCount() {
//     return [...arguments].reduce((returnValue,current)=>{
//         if(Object.prototype.hasOwnProperty.call(current,'quack')) returnValue++
//         return returnValue
//     },0)
// }

function duckCount(...arguments) {
    return arguments.reduce((returnValue,current)=>{
        if(Object.prototype.hasOwnProperty.call(current,'quack')) returnValue++
        return returnValue
    },0)
}
  
module.exports = duckCount