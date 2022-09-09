var slice = Array.prototype.slice
    
function logger(namespace) {
    return function logger(...args) {
        console.log.apply(console, [namespace, ...args])
    }
}

module.exports = logger