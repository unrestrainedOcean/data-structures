var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// Time Complexity: linear
setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

// Time Complexity: linear
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

// Time Complexity: linear
setPrototype.remove = function(item) {
  this._storage = _.reject(this._storage, function(value) {
    return value === item;
  });
};