var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.last = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },
  pop: function() {
    if (this.last) {
      this.last --;
      var next = this.storage[this.last];
      delete this.storage[this.last];
      return next;
    }
  },
  size: function() {
    return this.last;
  }

};



