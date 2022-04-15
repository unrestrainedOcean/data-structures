var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = {};
  newTree.counter = 0;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Time complexity: O(1)
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children[this.counter] = child;
  this.counter++;
};

// Time complexity: O(n)
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (this.counter > 0) {
    for (var key in this.children) {
      if (this.children[key].contains(target)) {
        return true;
      }
    }
  }
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
