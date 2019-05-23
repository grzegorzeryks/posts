// GET DATA FROM JSON AND CREATE NEW STRUCTURE FUNCTION
function getData() {
  let myJson = []
  var xhr = new XMLHttpRequest();
  var url = 'https://www.reddit.com/r/funny.json';

  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
      var jsonData = JSON.parse(xhr.responseText);
      arr = jsonData.data.children;

      for (let i = 0; i < arr.length; i++) {
        let newObject = {};
        newObject.title = arr[i].data.title;
        newObject.ups = arr[i].data.ups;
        myJson.push(newObject);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
  return myJson;
}
let newData = getData();
console.log(newData);