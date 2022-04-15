var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    first: 1,
    counter: 1
  };
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    //GET SOMETHING INTO THE STORAGE
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    //RETURN SOMETHING, THEN DELETE THAT SOMETHING
    var next = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return next;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};







// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = {
//     storage: {},
//     first: 0,
//     last: 0
//   };
//   _.extend(someInstance, queueMethods);

//   return someInstance;
// };

// var queueMethods = {

//   enqueue: function(value) {
//     //GET SOMETHING INTO THE STORAGE
//     var keyMaker = Object.keys(this.storage).length + 1;
//     this.storage[keyMaker] = value;
//   },

//   dequeue: function() {
//     //RETURN SOMETHING, THEN DELETE THAT SOMETHING
//     var nextKey = Object.keys(this.storage)[0];
//     var next = this.storage[nextKey];
//     delete this.storage[nextKey];
//     for (var keys in this.storage) {
//       for (var i = 1; i < Object.keys(this.storage); i++) {
//         this.storage[i] = this.storage[keys];
//       }
//       delete this.storage[keys];
//     }
//     return next;
//   },

//   size: function() {
//     return Object.keys(this.storage).length;
//   }
// };


