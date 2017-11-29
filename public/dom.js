(() => {
  var input = document.querySelector('.search_query');
  var form = document.getElementById('countriesForm');
  input.addEventListener(
    'keyup', (event) => {
      var inputValue = input.value;
      if (event.keyCode < 57) {
        return;
      } else {
        var xhr = new XMLHttpRequest();
        var link = "/countries";
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            value = xhr.responseText;
            list(value);
            document.querySelector('input').oninput = function() {
                    console.log(this.value);
            };
          }
        }
      }
      xhr.open("POST", link);
      xhr.send(inputValue);
    });
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    return value;
  });
  var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
  });
})();

const list = (value) => {
  const datalist = document.getElementById('countriesList');
  value = value.substring(2, value.length - 2);
  var array = value.split('","');
  datalist.innerHTML = array.reduce(function (acc,element) {
    acc += '<option value="' + element + '" />';
    return acc;
    },"");

}
