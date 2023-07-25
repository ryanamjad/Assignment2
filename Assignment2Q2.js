function findValueInNestedObject(obj, value) {
  for (const prop in obj) {
    if (obj[prop] === value) {
      return true;
    }

    if (typeof obj[prop] === 'object') {
      const found = findValueInNestedObject(obj[prop], value);
      if (found) {
        return true;
      }
    }
  }

  return false;
}

// Sample usage
var customNestedObject = {
  data: {
    info: {
      items: {
        item: {
          extraInfo: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
};

var valueToSearch = 'foo2';
console.log(findValueInNestedObject(customNestedObject, valueToSearch));
