let Utils = {
  randomFlip: () => {
    return Math.floor(Math.random() * 2);
  },

  objEqual: (a, b) => {
    if (a == null || b == null) {
      return false;
    }
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
};

export default Utils;
