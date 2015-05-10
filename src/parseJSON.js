// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if(typeof(json) !== 'string') {
  	throw new SyntaxError('Error!');
    //return -1;
  }
  else if(json === '[]') {
  	return [];
  }
  else if (json === '{}') {
  	return {};
  }
  else if (json[0] === '{') {
    if(json[json.length-1] !== '}') {
      throw new SyntaxError();
      //return -1;
    }
    if(json.split(':{')[0] !== json) {
      var returnObj = {};
      var splitObj = json.split(':{');
      splitObj[0] = splitObj[0].split('{')[1];
      splitObj[splitObj.length-1] = splitObj[splitObj.length-1].split('}')[0];
      for(var i=0; i<splitObj.length-1; i++) {
        var keyStr = parseJSON(splitObj[i].trim());
        if(splitObj[i+1].split(', "')[0] === splitObj[i+1]) {
          var valStr = parseJSON('{' + splitObj[i+1] + '}');
          //var valStr = innerObj;
          //var innerSplit = json.split()
          //var innerObjValStr = parseJSON(splitObj[i+1].trim());
        }
        else {
          var valStr = parseJSON(splitObj[i+1].split(', "')[0].trim());
          splitObj[i+1] = '"' + splitObj[i+1].split(', "')[1];
        }            
        returnObj[keyStr] = valStr;
      }
      return returnObj;
    }
    else if(json.split(':[')[0] !== json) {
      var returnObj = {};
      var splitObj = json.split(':[');
      splitObj[0] = splitObj[0].split('{')[1];
      splitObj[splitObj.length-1] = splitObj[splitObj.length-1].split('}')[0];

      for(var i=0; i<splitObj.length-1; i++) {
        var keyStr = parseJSON(splitObj[i].trim());
        if(splitObj[i+1].split('], "')[0] === splitObj[i+1]) {
          var valStr = parseJSON('[' + splitObj[i+1]);
          //var valStr = innerObj;
          //var innerSplit = json.split()
          //var innerObjValStr = parseJSON(splitObj[i+1].trim());
        }
        else {
          var valStr = parseJSON(splitObj[i+1].split(', "')[0].trim());
          splitObj[i+1] = '"' + splitObj[i+1].split(', "')[1];
        }            
        returnObj[keyStr] = valStr;
      }
      return returnObj;
    }
    else {
  	  var returnObj = {};
    	var splitObj = json.split(':');
      splitObj[0] = splitObj[0].split('{')[1];
      splitObj[splitObj.length-1] = splitObj[splitObj.length-1].split('}')[0];
      for(var i=0; i<splitObj.length-1; i++) {
        var keyStr = parseJSON(splitObj[i].trim());
        if(splitObj[i+1].split(', "')[0] === splitObj[i+1]) {
          var valStr = parseJSON(splitObj[i+1].trim());
        }
        else {
          var valStr = parseJSON(splitObj[i+1].split(', "')[0].trim());
          splitObj[i+1] = '"' + splitObj[i+1].split(', "')[1];
        }            
        returnObj[keyStr] = valStr;
      }
    	return returnObj;
    }
  }
  else if(json[0] === '[') {
    if(json[json.length-1] !== ']') {
      throw new SyntaxError('Error!');
      //return -1;
    }
  	var returnObj = [];
  	var splitStr = json.split(',');
    splitStr[0] = splitStr[0].split('[')[1];
    splitStr[splitStr.length-1] = splitStr[splitStr.length-1].split(']')[0];
  	//grab only odd split values
  	for(var i=0; i<splitStr.length; i++) {
      returnObj.push(parseJSON(splitStr[i].trim()));
  	}
    return returnObj;
  }
  else {
    if(json === 'undefined') {return undefined;}
    else if(json === 'null' || json === 'null ') {return null;}
    else if(json === 'false') { return false;}
    else if(json === 'true') { return true;}
    else if(json.split('"').length === 3) {
      return json.split('"')[1];
      //return split[1];
    }
    else {
      return Number(json);
    }
  }
};
