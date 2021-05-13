function loadingFunction() {
    var songs = ["space_jam.mp3", "macarena.mp3", "ice.mp3"];


    var song = Math.floor(Math.random() * songs.length);

    var audio = new Audio(songs[song]);
    audio.play();


}