( () => {
  var input = document.querySelector('.search_query');

  input.addEventListener(
    'keyup', () => {
        var inputValue = input.value;
      var xhr = new XMLHttpRequest();
      var link = "/countries";
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var value = xhr.responseText;
          console.log(value);
        }}
        xhr.open("POST", link);
        xhr.send(inputValue);
      });
} )();
//
// function Listener() {
//   var input = document.querySelector('.search_query');
//   input.onkeyup = function() {
//     if (input.value === " ") {
//       console.log('space');
//     } else {
//       return input.value;
//     }
//   }
// }
