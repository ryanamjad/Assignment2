function checkIfAllLessThanSeven(arr, callback) {
	var newArray = [...arr];
	if (newArray.length === 0) return true;
	if (callback(newArray[0])) {
	  newArray.shift();
	  return checkIfAllLessThanSeven(newArray, callback);
	} else {
	  return false;
	}
  }
  
  var nums = [1, 2, 9];
  var allAreLessThanSeven = checkIfAllLessThanSeven(nums, function(num) {
	return num < 7;
  });
  
  console.log(allAreLessThanSeven);
  