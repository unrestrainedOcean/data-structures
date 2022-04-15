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
  // GET SOMETHING OUT! FIRST ONE IN GETS OUT LAST;
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



//Work within the src/functional-shared/ folder
//Create an object that holds the methods that will be shared by all instances of the class
//Use the keyword this in your methods
////Use _.extend  to copy the methods onto the instance
// Don't:

// Use the keyword new or prototype chains