var BinarySearchTree = function(value) {
  var storage = Object.create(BSTmethods);
  storage.left = null;
  storage.right = null;
  storage.value = value;
  return storage;
};

var BSTmethods = {
//Time Complexity: (log n)
  insert: function(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }

    if (value > this.value) {
      if (!this.right) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  //Time Complexity: (log n)
  contains: function(value) {
    // if (value === this.value) {
    //   return true;
    // }
    // if (value < this.value) {
    //   if (!this.left) {
    //     return false;
    //   } else {
    //     return this.left.contains(value);
    //   }
    // }
    // if (value > this.value) {
    //   if (!this.right) {
    //     return false;
    //   } else {
    //     return this.right.contains(value);
    //   }
    // }

    if (value === this.value) {
      return true;
    }
    if (this.value > value && this.left) {
      return this.left.contains(value);
    }
    if (this.value < value && this.right) {
      return this.right.contains(value);
    }
    return false;
  },

  //Time Complexity: Linear
  depthFirstLog: function(callBack) {
    // if(!this.left && !this.right){
    //   return ???
    // }

    callBack(this.value);

    if (this.left) {
      this.left.depthFirstLog(callBack);
    }

    if (this.right) {
      this.right.depthFirstLog(callBack);
    }
  }

};
