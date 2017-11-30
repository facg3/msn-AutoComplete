(() => {
  var input = document.querySelector('.search_query');
  var form = document.getElementById('countriesForm');
  input.addEventListener(
    'keyup', (event) => {
      var inputValue = input.value;
      if (event.keyCode > 9 && event.keyCode < 57) {
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
  var mymap = L.map('mapid').setView([24.0000,54.0000], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 5,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFobW91ZG1oIiwiYSI6ImNqYWt6b2YxdDN5eG4zM25pMXBkYnRxb2gifQ.IjkunbIv9UyHyiT-LyV88g'
}).addTo(mymap);
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
