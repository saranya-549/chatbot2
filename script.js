document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const messageText = inputField.value;

    if (messageText.trim() === '') return;

    displayMessage(messageText, 'user');
    inputField.value = '';

    const botResponse = getBotResponse(messageText);
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 1000);
}

function displayMessage(text, sender) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('p');
    messageElement.className = sender;
    messageElement.textContent = text;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('name')) {
        return "I'm SaranyaChatbot!";
    } else if (lowerCaseMessage.includes('how are you')) {
        return "I'm just a bunch of code, but thanks for asking!";
    }else if (lowerCaseMessage.includes('hi')) {
        return "Hello! ask me anything!";
    }else if (lowerCaseMessage.includes('joke')) {
        return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (lowerCaseMessage.includes('weather')) {
        return "I can't check the weather, but I hope it's nice!";
    } else if (lowerCaseMessage.includes('time')) {
        return "I don't have a watch, but it's always chat time!";
    } else if (lowerCaseMessage.includes('math')) {
        return "Sure, I can help! What math problem do you have?";
    } else {
        return "I'm sorry, I don't understand that.";
    }
}