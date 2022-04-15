var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    // Create a new node of newTail
    var newTail = Node(value);

    // If the linkedlist is empty
    if (this.head === null) {
      // set the head and tail property to newTail
      this.head = newTail;
      this.tail = newTail;
    } else {
      // If not, change the current tail's next property to the newTail
      this.tail.next = newTail;
      // change the current linklist tail property to the newTail
      this.tail = newTail;
    }
    this.count++;
  };

  list.removeHead = function() {
    //if head is null return nothing
    if (this.head === null) {
      return null;
    }
    if (this.count === 1) {
      var temp = this.head;
      this.tail = null;
      this.count--;
      return temp.value;
    }
    //create a temporary value for the head

    var temp = this.head;
    //assign head to next
    this.head = temp.next;
    //delete head
    // delete this.head;
    // then subtract from count
    this.count--;
    return temp.value;
  };

  list.contains = function(target) {
    // if it's empty
    // return false
    if (this.count === 0) {
      return false;
    }

    // create a var to hold the current node, starting from head
    var start = this.head;
    // while current node's next property is not null
    while (start !== null) {
      if (start.value === target) {
        return true;
      }
      start = start.next;
    }
    // if the current node's value is equal to target
    // return true
    // set the current node to next
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
