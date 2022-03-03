GreenAudioPlayer.init({
    selector: '.audio', // inits Green Audio Player on each audio container that has class "player"
    stopOthersOnPlay: true
});

function show_hide(){
    var description = document.getElementById("description");
    if (description.style.display === "none"){
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}