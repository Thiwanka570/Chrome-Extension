chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.font) {
        alert(message.font)
        document.body.style.fontFamily = message.font;

    }
});
