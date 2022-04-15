class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(someQue) {
    this.storage = {};
    this.next = 0;
  }
  push(value) {
    this.storage[this.next] = value;
    this.next++;
  }
  pop() {

    this.next--;
    var popped = this.storage[this.next];
    delete this.storage[this.next];
    return popped;
  }
  size() {
    return Object.values(this.storage).length;
  }

}