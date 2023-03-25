import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './Chatbot.css';

const MyChatbot = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chatbot-container">
      <button
        onClick={toggleChat}
        className="chatbot-button btn btn-primary rounded-circle shadow"
      >
        <i className="fas fa-comment"></i>
      </button>
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
