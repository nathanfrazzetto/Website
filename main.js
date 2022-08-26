/*
 * Video loading
 */

// Current Video Index - position in the video title list
var curr_vid_idx = 0;

// ADD VIDEO TITLES HERE THAT YOU WANT TO LOOP THROUGH WITH SKIP BUTTONS (see 'video' directory)
const videos = ["Header 01.mp4", "Header 02.mp4", "Header 03.mp4"];

function loadVideo(index) {
  var video = document.getElementById("showcase-video");
  video.setAttribute("src", "videos/" + videos[index]);
  video.load();
}

function nextVideo() {
  curr_vid_idx = (curr_vid_idx + 1) % videos.length; // if at the end of the video title list, loop back to beginning
  loadVideo(curr_vid_idx);
}

function previousVideo() {
  curr_vid_idx = (curr_vid_idx > 0) ? curr_vid_idx - 1 : videos.length - 1; // syntax here is called a "ternary" operation. Basically, if the position of the video title is the beginning of our list, we loop back around to the last item.
  loadVideo(curr_vid_idx);
}


// Play next video when ended

document.getElementById("showcase-video").onended = function(e) { nextVideo(); }


// Video controls

document.getElementById("pause").onclick = function(e) {
  var video = document.getElementById("showcase-video");
  video.pause();
};

document.getElementById("play").onclick = function(e) {
  var video = document.getElementById("showcase-video");
  video.play();
};

document.getElementById("next").onclick = function(e) {
  var video = document.getElementById("showcase-video");
  nextVideo();
}

document.getElementById("prev").onclick = function(e) {
  var video = document.getElementById("showcase-video");
  previousVideo();
}

