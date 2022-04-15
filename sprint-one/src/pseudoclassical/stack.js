var Stack = function(someQue) {
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