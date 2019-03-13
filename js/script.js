// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var offset = 0;

var site_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"+`&offset=${offset}`;//&offset=0
var pic_url = "var pic_url = response.data.images.original.url";

var locked = false;


function appendImg(){
  if($("#search-term").val() !== ""){ //only replace puppy with search term if it is not left blank
      site_url = `https://api.giphy.com/v1/gifs/search?q=     ${$("#search-term").val()}     &rating=pg&api_key=dc6zaTOxFJmzC&offset=${offset}` //replacing the puppy with the word in inpu box
  }
  
$.ajax({
    url:site_url,
    method: "GET",
    success(response){
        //console.log(site_url);
        for(let i= 0;i<response.data.length/*numbOfGif*/;i++){


            let image = response.data[i].images.original.url;
            $(".gallery").append(`<img src=${image}>`);
            //gifAppended++;
            }
            
        
        }
    });
    //$("#search-term").val()
    
}  

$(document).scroll(function(){ 
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && locked === false) {
       offset+=25;
       site_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"+`&offset=${offset}`;
       console.log(offset);
       locked = true;
       
       
       $.ajax({
        url:site_url,
        method: "GET",
        success(response){
            setTimeout(function(){
                locked = false;
            },1500);
        //console.log(site_url);
        for(let i= 0;i<response.data.length/*numbOfGif*/;i++){
            let image = response.data[i].images.original.url;
            $(".gallery").append(`<img src=${image}>`);
            //gifAppended++;
            }
            
        
        }
    });

    }

    
        // console.log($(document).height());
        //console.log($(window).scrollTop() + $(window).height());
        // console.log("bottom");
        //numbOfGif += 5;
   //         for(let i = numbOfGif - gifAppended; i<numbOfGif; i++){
   //         let image = response.data[i].images.original.url;
   //         $(".gallery").append(`<img src=${image}>`);
//        }

    });
            
   
    //insteac of click just scroll to apppend  |
                                            // V            


$("#search-button").click(function(){
        $(".gallery").html(""); //clear gallery, so the gif from the pervious searches disappear

   // numbOfGif = 5; //number of gif displayed each time, so it won't just load all at the same time
   // gifAppended = 0;
    appendImg();
});

