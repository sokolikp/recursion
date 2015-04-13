// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	  
  //base case: individual undefined or null, or undefined/null from array (objects handled differently below)	  
  if(obj === undefined || obj === null) {
  	return "null";
  }

  //base case: string
  else if(typeof(obj) === 'string') {
  	return '\"' + obj + '\"';
  }

  //base case: number or bool
  else if(typeof(obj) === 'number' || typeof(obj) === 'boolean') {
  	return obj.toString();
  }

  //handle arrays
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

  //handle objects
  else {
	var returnString = '{';
	for(var key in obj) {
	  if(key !== 'functions' && key !== 'undefined') {
 	    returnString += (stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
	  }	  
	}
	if(returnString.length !== 1) {
	  returnString = returnString.substring(0, returnString.length - 1);
	}
	returnString += '}';
	return returnString;
  }
 // }
};
