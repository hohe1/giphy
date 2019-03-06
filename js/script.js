// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var site_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
var pic_url = "var pic_url = response.data.images.original.url";

function appendImg(){
    $(".gallery").html(""); //clear gallery, so the gif from the pervious searches disappear
  if($("#search-term").val() !== ""){ //only replace puppy with search term if it is not left blank
      site_url = `https://api.giphy.com/v1/gifs/search?q=${$("#search-term").val()}&rating=pg&api_key=dc6zaTOxFJmzC` //replacing the puppy with the word in inpu box
  }
  
  
$.ajax({
    url:site_url,
    method: "GET",
    success(response){
        console.log(site_url);

        for(let i= 0;i<response.data.length;i++){
            let image = response.data[i].images.original.url;
            $(".gallery").append(`<img src=${image}>`);
            }
        }
    });
    
    //$("#search-term").val()
}  

function atBottom(){
    
    
}
    






// $.ajax({
//     url:pic_url,
//     method: "GET",
//     success(response){
//         console.log(response.data[0].url)
//     }
    
// });

$("#search-button").click(function(){
    appendImg();
});

