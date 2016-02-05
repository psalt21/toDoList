function addToList(){
  var input = document.getElementById('input').value;

  if(input.length > 0){
    var str = input;
    var str_array = str.split(',');
    for(var i = 0; i < str_array.length; i++) {
      var list = document.getElementById('list');
      var newItem = document.createElement('li')
      newItem.innerText = str_array[i];
      newItem.className = "items";
      list.appendChild(newItem);
// I need to break down the whole event listener below
      newItem.addEventListener("click", captureClick);
      document.getElementById('input').value='';
    }
  }
}


function captureClick (event){
  console.log(event);
  crossOffItem(event.target);
}

function crossOffItem(element){
  console.log(element);
  var classArray = element.className.split(' ');
  var index;
  for (var i = 0; i < classArray.length; i++){
    if (classArray[i] === 'cross-off') {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    classArray.splice(index, 1);
  }else{
    classArray.push('cross-off');
  }
  element.className = classArray.join(' ');
}
