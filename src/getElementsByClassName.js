// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //initialize elements array
  var elements = [];

  var getChildrenRecursively = function(node) {
	//base case - push node to array
	if( node.classList.contains(className) ) {
	  elements.push(node);
	}

	//Check whether children exist
	if (node.hasChildNodes()) {
	  //build children array and recursively call funciton on each child
	  var children = node.children;
	  for (var i = 0; i < children.length; i++) {
	    getChildrenRecursively(children[i]);
	  }
	}
  };

  //initial recursive function call
  getChildrenRecursively(document.body);
  return elements;
};
