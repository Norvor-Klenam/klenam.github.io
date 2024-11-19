// Initialize context for the AI
let userContext = {};

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');

    if (input.value.trim() !== '') {
        // Display the user's message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message');
        userMessage.textContent = `You: ${input.value}`;
        chatBody.appendChild(userMessage);

        // Simulate a reply after a short delay
        setTimeout(() => {
            const replyMessage = document.createElement('div');
            replyMessage.classList.add('message');
            replyMessage.textContent = getAIResponse(input.value);
            chatBody.appendChild(replyMessage);
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
        }, 1000); // Reply after 1 second

        // Clear the input
        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }
}

// Function to generate AI-like responses
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    let response = '';

    // Basic keyword recognition with context handling
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = 'AI: Hello! How can I assist you today?';
    } else if (lowerInput.includes('help')) {
        response = 'AI: Sure! What do you need help with?';
    } else if (lowerInput.includes('thanks') || lowerInput.includes('thank you')) {
        response = 'AI: You’re welcome! Is there anything else I can help you with?';
    } else if (lowerInput.includes('bye')) {
        response = 'AI: Goodbye! Have a great day!';
    } else if (lowerInput.includes('how are you')) {
        response = 'AI: I’m just a program, but thanks for asking! How can I help you today?';
    } else if (lowerInput.includes('what is your name')) {
        response = 'AI: I am an AI assistant created to help you!';
    } else if (lowerInput.includes('weather')) {
        response = 'AI: I can’t check the weather right now, but it’s always good to check a reliable weather website!';
    } else if (lowerInput.includes('tell me a joke')) {
        response = 'AI: Why did the scarecrow win an award? Because he was outstanding in his field!';
    } else if (lowerInput.includes('my name is')) {
        const name = lowerInput.split('my name is ')[1];
        if (name) {
            userContext.name = name.trim();
            response = `AI: Nice to meet you, ${userContext.name}!`;
        } else {
            response = 'AI: Could you please tell me your name?';
        }
    } else if (userContext.name && lowerInput.includes('what is my name')) {
        response = `AI: Your name is ${userContext.name}.`;
    } else {
        // Default response for unrecognized input
        response = 'AI: I\'m sorry, I didn\'t quite understand that. Can you rephrase?';
    }
}