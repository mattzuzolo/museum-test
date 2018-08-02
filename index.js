console.log("js is loaded!!!");

let searchQuery = ""

var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "",
    title: "rabbit",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
   console.log(data);
   let imgLink = (data.records[1].primaryimageurl);

   let img = document.createElement("img");
   document.append(img);

   img.src = imgLink;

});
