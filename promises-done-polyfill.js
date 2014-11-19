if (typeof Promise !== 'function' && typeof Promise !== 'object') {
  throw "Cannot polyfill Promise when it is " + JSON.stringify(Promise);
}

if (typeof Promise.prototype.done !== 'function') {
  var rejectByThrowing = function(err) {
    setTimeout(function() { throw err }, 0);
  };

  Promise.prototype.done = function() {
    this.then.apply(this, arguments).then(null, rejectByThrowing);
  };
}