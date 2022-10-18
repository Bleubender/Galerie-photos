const images = document.querySelectorAll("#galery img");
let imageActive = 0;
let interval;
images[imageActive].classList.add("show");

//Masquer les photos sauf la première
for(i=1; i<images.length; i++){
    images[i].classList.add("hidden");
}

//Click sur le bouton suivant
document.querySelector("#next").addEventListener("click", function() {
    next();
});

//Click sur le bouton précédent
document.querySelector("#prev").addEventListener("click", function() {
    prev();
});

//Click sur le bouton lecture
document.querySelector("#play").addEventListener("click", function() {
    interval = setInterval(next, 2000);
    document.querySelector("#pause").classList.remove("pressed")
    this.classList.add("pressed");
});

//Click sur le bouton pause
document.querySelector("#pause").addEventListener("click", function() {
    clearInterval(interval);
    document.querySelector("#play").classList.remove("pressed");
    this.classList.add("pressed");
});

//Fonction pour photo suivante
const next = function(){
    images[imageActive].classList.remove("show");
    images[imageActive].classList.add("hidden");
    imageActive += 1;
    if (imageActive >= images.length){
        imageActive=0
    }
    images[imageActive].classList.remove("hidden");
    setTimeout(function(){
        images[imageActive].classList.add("show");
    }, 300)
};

//Fonction pour photo précédente
const prev = function(){
    images[imageActive].classList.remove("show");
    images[imageActive].classList.add("hidden");
    imageActive -= 1;
    if (imageActive < 0){
        imageActive=images.length-1
    }
    images[imageActive].classList.remove("hidden");
    setTimeout(function(){
        images[imageActive].classList.add("show");
    }, 300)
};