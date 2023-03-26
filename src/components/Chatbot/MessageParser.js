class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes('company info')) {
        this.actionProvider.handleCompanyInfo();
        return;
      }
  
      if (lowerCaseMessage.includes('ports')) {
        this.actionProvider.handlePortsInfo();
        return;
      }
  
      if (
        lowerCaseMessage.includes('delivery locations') ||
        lowerCaseMessage.includes('locations')
      ) {
        this.actionProvider.handleDeliveryLocations();
        return;
      }
  
      if (lowerCaseMessage.includes('services')) {
        this.actionProvider.handleServices();
        return;
      }
  
      const defaultMessage = this.actionProvider.createChatBotMessage(
        "I'm not sure how to respond to that. Please try asking a different question."
      );
      this.actionProvider.updateChatbotState(defaultMessage);
    }
  }
  
  export default MessageParser;
  