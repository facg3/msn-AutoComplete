window.onload = Listener ;

function Listener() {
  var input = document.querySelector('.search_query');
  input.onkeyup = function () {
    if(input.value === " "){
      console.log('space');
    }
    else {
      console.log(input.value);
    }
  }
}
