function repeat(operation, num) {
    if (num < 0) return
    operation()
    repeat(operation,--num) 

    /** alternate approach
    for(let i=0;i<num;i++){
        operation()
    } 
    **/
  }
  
  // Do not remove the line below
  module.exports = repeat