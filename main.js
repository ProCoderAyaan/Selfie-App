var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult() = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "Take My Selfie"){
        console.log("Taking Selfie ---");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcab.attach(camera);
    setTimeout(function(){
    take_snapshot();
    save();
},5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 function take_snapshot() { Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; 
    });
}