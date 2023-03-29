import { createChatBotMessage } from 'react-chatbot-kit';
import Topics from './Topics';

const config = {
  // Specify the name of the chatbot
  botName: 'Heritage Haulage Chatbot',

  // Set the initial messages to show when the chatbot is opened
  initialMessages: [
    createChatBotMessage('Hi there! How can I help you today?'),
    createChatBotMessage('Here are some topics I can help you with:', {
      widget: 'topics', // Show the 'topics' widget in the message
    }),
  ],

  // Define any custom components to use in the chatbot
  customComponents: {},

  // Define any custom styles for the chatbot
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E', // Set the background color of the bot's messages
    },
    chatButton: {
      backgroundColor: '#5CCC9D', // Set the background color of the chat button
    },
  },

  // Define the widgets to use in the chatbot
  widgets: [
    {
      widgetName: 'topics', // Specify the name of the widget
      widgetFunc: (props) => <Topics {...props} />, // Specify the component to use for the widget
      mapStateToProps: ['topics'], // Specify the data to map to the widget's props
      props: {},
    },
  ],
};

export default config;
