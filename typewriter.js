let startTime, interval;

function startTimer() {
    // If the timer is already running, return
    if (interval) return;

    // Start the timer
    startTime = new Date();
    
    // Update the timer display every 100ms
    interval = setInterval(updateTimer, 100);
}

function updateTimer() {
    // Get the current time and calculate elapsed time in seconds
    const currentTime = new Date();
    const timeElapsed = ((currentTime - startTime) / 1000).toFixed(2);

    // Update the timer display
    document.getElementById('timerDisplay').innerText = `Time Elapsed: ${timeElapsed} seconds`;
}

document.getElementById('submitBtn').addEventListener('click', processParagraph);

function processParagraph() {
    const inputText = document.getElementById('inputParagraph').value.trim();
    
    if (!inputText) {
        alert('Please write a paragraph.');
        return;
    }

    // Stop the timer when the paragraph is submitted
    clearInterval(interval);

    // Calculate total time taken to write the paragraph
    const endTime = new Date();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Time in seconds

    // Split the input text into words
    let words = inputText.split(/\s+/);

    if (words.length < 7) {
                document.getElementById('generatedParagraph').innerText = "Please enter at least 7 words.";
                return;
            }
   
    const commonWords = ["the", "and", "is", "to", "in"];
    let commonCount = 0;
    let uniqueWords = new Set(words);

    for (const word of words) {
        if (commonWords.includes(word.toLowerCase())) {
            commonCount++;
        }
    }


    const firstWord = words[0];
        const lastWord = words[words.length - 1];
    if (firstWord !== lastWord && commonCount >= 5) {
    
                document.getElementById('generatedParagraph').innerText = "Paragraph is valid.";
                document.getElementById('timeTaken').innerText = `Time taken: ${timeTaken} seconds`;
            } else {
                document.getElementById('generatedParagraph').innerText = "Paragraph is invalid. Ensure the first and last words are different and at least 5 common words are used.";
                document.getElementById('timeTaken').innerText = "";
            }

}
