var image;

function generateCat(){

    image = document.createElement('img');
    var catGenDiv = document.getElementById("catGenDiv");
    image.src = "https://thecatapi.com/api/images/get?formt=src&type=gif&size=small";
    catGenDiv.appendChild(image); 

}

function reset(){
    location.reload();
}
