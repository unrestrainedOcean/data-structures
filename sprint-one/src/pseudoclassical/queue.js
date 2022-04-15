var Queue = function(queueRef) {
  this.storage = {};
  this.counter = 0;
  this.next = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var pop = this.storage[this.next];
  delete this.storage[this.next];
  this.next++;
  return pop;
};
Queue.prototype.size = function() {
  return Object.values(this.storage).length;
};