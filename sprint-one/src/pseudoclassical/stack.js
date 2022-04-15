var Stack = function(someQue) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.next = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.next] = value;
  this.next++;
};
Stack.prototype.pop = function() {
  if (this.next) {
    this.next--;
    var popped = this.storage[this.next];
    delete this.storage[this.next];
    return popped;
  }
};
Stack.prototype.size = function() {
  return Object.values(this.storage).length;
};
