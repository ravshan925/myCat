// Write our JavaScript in here
// alert("Hello Page Says YOU ;) ")
var pics = [
    "./imagess/kitten.jpg",         //0
    "./imagess/kitty-lassie.jpg",   //1
    "./imagess/kitty-window.jpg",   //2
    "./imagess/kitty-sofa.jpg",     //3
    "./imagess/kitty_door.jpg",     //4
                                    //5
]

var btn = document.querySelector("button"); //selecting button save to "btn"
var img = document.querySelector("img");    //change img
var counter = 1;

btn.addEventListener("click", function(){
    if (counter === 5){
        counter = 0;
    }
   img.src = pics[counter] 
   counter = counter + 1; // every img1 + 1 = img2
});