(() => {
  var input = document.querySelector('.search_query');
  input.addEventListener(
    'keyup', (event) => {
      var inputValue = input.value;
      if (event.keyCode < 57) {
        return ;}
        else{
      var xhr = new XMLHttpRequest();
      var link = "/countries";
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          value = xhr.responseText;
          list(value);
        }
      }}
      xhr.open("POST", link);
      xhr.send(inputValue);
    });
})();

const list = (value) =>{
  const datalist = document.getElementById('countriesList');
  value = value.substring(2,value.length-2);
  var array = value.split('","');
  var str = '';
  array.forEach(function(v) {
    str += '<option value="'+v+'" />';
  });
  datalist.innerHTML = str;
}
