function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.onresult = function(event) {
    const query = event.results[0][0].transcript;
    document.getElementById("chat").innerText = "You said: " + query;
    if (query.includes("crop")) {
      document.getElementById("chat").innerText += "\nSuggested Crop: Paddy 🌾";
    }
  };
  recognition.start();
}
