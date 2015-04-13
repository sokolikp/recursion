// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	  
  if(obj === undefined || obj === null) {
  	return "null";
  }

  else if(typeof(obj) === 'string') {
  	return '\"' + obj + '\"';
  }

  else if(typeof(obj) === 'number' || typeof(obj) === 'boolean') {
  	return obj.toString();
  }

  else if( Array.isArray(obj) ) {
  	if(obj.length === 0) {
  		return '[]';
  	}
  	var returnString = '[';
  	for(var i=0; i<obj.length-1; i++) {
  	  returnString += (stringifyJSON(obj[i]) + ',');
	}
    returnString += stringifyJSON(obj[obj.length-1]);
	returnString += ']';
	return returnString;
  }

  else {
  	if(Object.keys(obj).length === 0) {
  		return '{}';
  	}
  	console.log(obj);
	var returnString = '{';
	for(var key in obj) {
	  //console.log(obj);
	  //console.log(obj.key);
	  returnString += (stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
	}
	returnString = returnString.substring(0, returnString.length - 1);
	returnString += '}';
	//console.log(returnString);
	return returnString;
  }
 // }
};
