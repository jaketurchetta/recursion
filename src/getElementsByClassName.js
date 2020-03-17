// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];

  function findElements(result, className, element){
  	// identify starting node
  	var element = element || document.body;

  	// case 1: element with classes
  	if(element.classList && element.classList.contains(className)){
  		result.push(element);
  	}
  	

  	// case 2: element with child nodes
  	if(element.childNodes){
  		_.each(element.childNodes, function(item){
  				findElements(result, className, item);
  		})
  		
  		return result;
  	}
  }

  findElements(result, className, document.body);

  return result;

};