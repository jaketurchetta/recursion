// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // define result variable
  var finalString = '';

  // case 1: undefined and function inputs
  if (typeof obj === 'undefined' || typeof obj === 'function') {
  	return '';
  }

  // case 2: obj is null
  if(obj === null) {
  	return 'null';
  }

  // case 3: obj is number or boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	finalString += obj;
  }

  // case 4: obj is a string
  if (typeof obj === 'string') {
  	obj = '\"' + obj + '\"';
  	finalString += obj;
  }

  // case 5: empty array
  if (Array.isArray(obj) && obj.length < 1) {
  	return finalString += '[]';
  }

  // case 6: populated array
  if(Array.isArray(obj) === true){
  		var finalArray = [];
  		_.each(obj, function(item){
  			finalArray.push(stringifyJSON(item));
  		})

  		return finalString += '[' + finalArray + ']';
  	}

  // case 7: object
  if (typeof obj === 'object') {
  	for (var key in obj) {
  		if(typeof obj[key] !== 'function' && obj[key] !== undefined) {
  			finalString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  		}
  	}
  	return '{' + finalString.slice(0,finalString.length-1) + '}';
  }

  return finalString;

};
