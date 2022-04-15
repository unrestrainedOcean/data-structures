var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    var newKey = Object.keys(this.storage).length + 1;
    this.storage[newKey] = value;
  },

  pop: function() {
    var nextIndexOut = Object.keys(this.storage).length - 1;
    var lastObj = Object.keys(this.storage)[nextIndexOut];
    var nextOut = this.storage[lastObj];
    delete this.storage[lastObj];
    return nextOut;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};