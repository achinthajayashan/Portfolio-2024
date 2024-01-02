document.addEventListener("DOMContentLoaded", function() {
    const texts = ["fullstack developer", "video editor", "designer"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";

    function type() {
        if (charIndex < texts[index].length) {
            currentText += texts[index].charAt(charIndex);
            document.getElementById("typing-text").innerText = currentText;
            charIndex++;
            setTimeout(type, 200); // Adjust typing speed here (in milliseconds)
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentText = texts[index].substring(0, charIndex - 1);
            document.getElementById("typing-text").innerText = currentText;
            charIndex--;
            setTimeout(erase, 100); // Adjust erasing speed here (in milliseconds)
        } else {
            index++;
            if (index >= texts.length) {
                index = 0;
            }
            setTimeout(type, 1000); // Delay before typing next text
        }
    }

    type(); // Initial call to start typing
});