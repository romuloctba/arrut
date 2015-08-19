(function() {
  var ArrayUtils = function(arr) {
    if (!(this instanceof ArrayUtils)) {
      return new ArrayUtils(arr);
    }
    this.arr = arr;
  }
  ArrayUtils.fn = ArrayUtils.prototype = {
    isEmpty: function(arr) {
      return arr.length == 0 ? true : false;
    },
    clone: function(arr) {
      return arr.slice();
    },
    getLastItem: function(arr) {
      return arr[arr.length - 1];
    },
    removeFirstItem: function(arr) {
      arr.shift();
      return arr;
    },
    removeLastItem: function(arr) {
      arr.pop();
      return arr;
    },
    addAsFirstItem: function(arr, item) {
      arr.unshift(item);
      return arr;
    },
    addAsLastItem: function(arr, item) {
      arr.push(item);
      return arr;
    },
    replaceItem: function(arr, indexOrItem, newItem) {
      if (typeof indexOrItem == "object") return TypeError('The method still does not work with objects');
      var isIndex = Number.isInteger(parseInt(indexOrItem));
      if (isIndex) {
        arr[indexOrItem] = newItem;
      } else {
        arr[arr.indexOf(indexOrItem)] = newItem;
      }
      return arr;
    },
    reverse: function(arr) {
      return arr.reverse();
    },
    sortAlpha: function(arr) {
      var error = -1;
      for (var i in arr) {
        if (typeof arr[i] != "string") {
          error++;
        }
      }
      if (error > -1) return TypeError('There are non-alphanumeric elements');
      return arr.sort();
    },
    sortNumeric: function(arr) {
      var error = -1;
      for (var i in arr) {
        if (typeof arr[i] != "number") {
          error++;
        }
      }
      if (error > -1) return TypeError('There are no numerical elements');
      return arr.sort(function(a, b) {
        return a - b;
      });
    }
  }
  window.ArrayUtils = ArrayUtils.fn, window.arrut = ArrayUtils.fn;
})();