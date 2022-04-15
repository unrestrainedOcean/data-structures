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
    var instanceSize = Object.values(storage).length ;
    return instanceSize;
  };
  return someInstance;
};

// var newStack = Stack();
// newStack.push('hello')
// console.log(newStack.pop())


//constraints:
//  push(string) - Add a string to the top of the stack
//  pop() - Remove and return the string on the top of  the  stack
//  size() - Return the number of items on the stack
