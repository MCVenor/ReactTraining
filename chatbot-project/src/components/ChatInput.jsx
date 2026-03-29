import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}) {

    const [inputText, setInputText] = useState('');


    function SaveInputText(event) {
    setInputText(event.target.value);
    
    }

    function SendMessage(/*event*/){

    const newChatMessages = [
        ...chatMessages,
        {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
        }
    ]

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
        ...newChatMessages,
        {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
        }
    ]);

    setInputText('');
    }

    return (
    <div 
    className="chat-input-container">
        <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={SaveInputText}
        value={inputText}
        className="chat-input"
        />
        <button 
        onClick={SendMessage}
        className="send-button"
        >Send</button>
    </div>
    );
}