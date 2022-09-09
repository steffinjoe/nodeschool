function Spy(target, method) {
    var methodObj = target[method]
    var returnObj = {
        count: 0
    }
    target[method] = function () {
        returnObj.count++
        return methodObj.apply(this, arguments)
    }
    return returnObj
}
  
module.exports = Spy