class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(someQue) {
    this.storage = {};
    this.counter = 0;
    this.next = 0;
  }
  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }
  dequeue() {
    var dq = this.storage[this.next];
    delete this.storage[this.next];
    this.next++;
    return dq;
  }
  size() {
    return Object.values(this.storage).length;
  }
}
