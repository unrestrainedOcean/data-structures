var Queue = function() {
  var someInstance = {
    storage: {},
    first: 1,
    counter: 1
  };
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    var next = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return next;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};