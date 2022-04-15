var Stack = function() {
  var someInstance = {};
  var storage = {};
  var top = 0;

  someInstance.push = function(value) {
    top++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    var topOfStack = storage[top];
    delete storage[top];
    top--;
    return topOfStack;
  };

  someInstance.size = function() {
    var instanceSize = Object.values(storage).length;
    return instanceSize;
  };
  return someInstance;
};