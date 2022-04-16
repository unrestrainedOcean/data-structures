
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Time Complexity: Linear
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var container = this._storage.get(index);
  //   _.each(container, function(tuple, i, container) {  //  MESSAGE TO TECH MENTOR: Why does _Each not work for this exercise?
  //     if (tuple[0] === k) {
  //       tuple[1] = v;
  //       return;
  //     }
  for (var i = 0; i < container.length; i++) {
    if (container[i][0] === k) {
      container[i][1] = v;
    }
  }
  var tupler = [k, v];
  container.push(tupler);
};

// Time Complexity: Linear
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);
  // _.each(container, function(tuple, i, container) {   //  MESSAGE TO TECH MENTOR: Why does _Each not work for this exercise?
  //   if (tuple[0] === k) {
  //     return tuple[1];
  //   }
  for (var i = 0; i < container.length; i++) {
    if (container[i][0] === k) {
      return container[i][1];
    }
  }
};


// Time Complexity: Linear
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);
  if (container !== undefined) {
    _.each(container, function(tuple, i, container) { //  MESSAGE TO TECH MENTOR: But it works here.
      if (tuple[0] === k) {
        container.splice(i, 1);
      }
    });
  }
};