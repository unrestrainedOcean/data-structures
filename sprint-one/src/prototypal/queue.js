var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {},
  someInstance.next = 0;
  someInstance.counter = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    var pop = this.storage[this.next];
    delete this.storage[this.next];
    this.next++;
    return pop;
  },
  size: function() {
    return Object.values(this.storage).length;
  }
};


