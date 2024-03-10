document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const convertBtn = document.getElementById('convertBtn');
    const stopBtn = document.getElementById('stopBtn');
    let speechSynthesisUtterance = null;

    convertBtn.addEventListener('click', function () {
        const textToSpeak = textInput.value.trim();

        if (textToSpeak !== '') {
            speechSynthesisUtterance = new SpeechSynthesisUtterance(textToSpeak);
            speechSynthesis.speak(speechSynthesisUtterance);
            toggleButtons(true);
        }
    });

    stopBtn.addEventListener('click', function () {
        speechSynthesis.cancel();
        toggleButtons(false);
    });

    function toggleButtons(isSpeaking) {
        convertBtn.disabled = isSpeaking;
        stopBtn.disabled = !isSpeaking;
    }
});
