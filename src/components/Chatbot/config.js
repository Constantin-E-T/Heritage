import { createChatBotMessage } from 'react-chatbot-kit';
import Topics from './Topics';

const config = {
  botName: 'Heritage Haulage Chatbot',
  initialMessages: [
    createChatBotMessage('Hi there! How can I help you today?'),
    createChatBotMessage('Here are some topics I can help you with:', {
      widget: 'topics',
    }),
  ],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5CCC9D',
    },
  },
  widgets: [
    {
      widgetName: 'topics',
      widgetFunc: (props) => <Topics {...props} />,
      mapStateToProps: ['topics'],
      props: {},
    },
  ],
};

export default config;
