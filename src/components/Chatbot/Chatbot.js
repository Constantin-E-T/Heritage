import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

import './Chatbot.css';

const MyChatbot = () => {
  // State for toggling chatbot
  const [showChat, setShowChat] = useState(false);

  // Function to toggle chatbot
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chatbot-container">
      {/* Button to toggle chatbot */}
      <button
        onClick={toggleChat}
        className="chatbot-button btn btn-outline rounded-circle shadow"
      >
        <i className="fas fa-comment"></i>
      </button>

      {/* Render chatbot if showChat is true */}
      {showChat && (
        <div className="chatbot-position">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default MyChatbot;
