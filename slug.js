// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
let newArr =  title.toLowerCase().split(" ").filter(each => each !== "").join("-");
 return newArr;

}
