console.log("js is loaded!!!");

const clickUrl = "https://shrouded-anchorage-38777.herokuapp.com/clicks"

let searchQuery = ""
const artContainer = document.getElementById("artwork-container")

let mousePosition = {
    xLocation: "",
    yLocation: ""
}

var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "API_KEY",
    person: "Van Gogh",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
   console.log(data);
   let imgLink = (data.records[4].primaryimageurl);
   let img = document.createElement("img");
   artContainer.append(img);
   img.src = imgLink;


   artContainer.addEventListener("click", function(){
      console.log(event)

      let myElement = document.createElement('div');
      artContainer.append(myElement)

      mousePosition.xLocation = event.clientX
      mousePosition.yLocation = event.clientY

      myElement.id = 'my-element';
      document.getElementById('my-element').style.position = "fixed";
      document.getElementById('my-element').style.top = mousePosition.yLocation +"px";
      document.getElementById('my-element').style.left = mousePosition.xLocation +"px";

      fetchPost(mousePosition);

})



});


function fetchPost(body){
  console.log("entered POST function")

  const postConfig = {
    Accept: "application/json",
    method: "POST",
    headers: {
         "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  };

  console.log("Fetch should trigger now.")
  return fetch(clickUrl, postConfig)
}


// title: "rabbit",
