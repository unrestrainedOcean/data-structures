var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKeys = 0;
  var next = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
  // enqueue(string) - Add a string to the back of the queue
    numKeys++;
    storage[numKeys] = value;

  };

  someInstance.dequeue = function() {
    var nextEl = storage[next];
    delete storage[next];
    next++;
    return nextEl;
    // dequeue() - Remove and return the string at the front of the queue
  };

  someInstance.size = function() {
    // size() - Return the number of items in the queue
    var queueSize = Object.values(storage).length;
    return queueSize;
  };

  return someInstance;
};
