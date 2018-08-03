console.log("js is loaded!!!");

let searchQuery = ""
const artContainer = document.getElementById("artwork-container")

let mousePosition = {
    xVal: "",
    yVal: ""
}

var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "API_KEY_HERE",
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

      mousePosition.xVal = event.clientX
      mousePosition.yVal = event.clientY

      myElement.id = 'my-element';
      document.getElementById('my-element').style.position = "fixed";
      document.getElementById('my-element').style.top = mousePosition.yVal +"px"; //or whatever
      document.getElementById('my-element').style.left = mousePosition.xVal +"px"; // or whatever

})



});




// title: "rabbit",
