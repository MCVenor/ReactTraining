import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {

      const [chatMessages, setChatMessages] = useState([{
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1'
      }, {
        message: 'hi i am a robot',
        sender: 'robot',
        id: 'id2'
      }, {
        message: 'heler feorfoi ',
        sender: 'user',
        id: 'id3'
      }, {
        message: 'igjeoirfe',
        sender: 'robot',
        id: 'id4'
      }]);
      // const [chatMessages, setChatMessages] = array;
      // const chatMessages = array[0];
      // const setChatMessages = array[1];

      return (
        <div className="app-container">
          <ChatMessages 
            chatMessages={chatMessages} />
          <ChatInput 
            chatMessages={chatMessages} 
            setChatMessages={setChatMessages}/>
        </div>
      );
    }

export default App
