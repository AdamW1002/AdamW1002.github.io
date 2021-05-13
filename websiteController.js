function loadingFunction() {
    var songs = ["space_jam.mp3", "macarena.mp3", "ice.mp3"]; //all songs we can play


    var song = Math.floor(Math.random() * songs.length); //choose one at random and play it

    var audio = new Audio(songs[song]);
    audio.play();

    console.log("Now playing: " + songs[song] );

}