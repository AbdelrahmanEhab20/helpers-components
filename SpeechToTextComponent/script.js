const element = document.getElementById("text");

// Check for browser support for SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();

  recognition.lang = "en-US"; // Set language
  recognition.continuous = true; // Keep recognition going

  document.onclick = () => {
    recognition.start(); // Start speech recognition on click
  };

  recognition.onresult = (event) => {
    console.log("SpeechRecognition event: ", event);
    const transcript = event.results[event.results.length - 1][0].transcript;
    element.innerText = transcript; // Display the transcript
  };

  recognition.onerror = (event) => {
    console.error("SpeechRecognition error detected: " + event.error);
  };

  recognition.onend = () => {
    console.log("SpeechRecognition ended.");
  };
} else {
  element.innerText = "Speech recognition not supported in this browser.";
}
