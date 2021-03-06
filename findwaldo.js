
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {;
  console.log("Found him at index", index.);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


///


function findWaldo(arr, found) {
  arr.forEach(function(element, index, array){
    if (element === "Waldo") {
      found(index);
    }
  })
  }


function actionWhenFound(index) {;
    console.log('Found him at index', index);
  }


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);