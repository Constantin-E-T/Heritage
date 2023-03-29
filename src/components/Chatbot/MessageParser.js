class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // If user's message contains "company info", call handleCompanyInfo function from ActionProvider
    if (lowerCaseMessage.includes('company info')) {
      this.actionProvider.handleCompanyInfo();
      return;
    }

    // If user's message contains "ports", call handlePortsInfo function from ActionProvider
    if (lowerCaseMessage.includes('ports')) {
      this.actionProvider.handlePortsInfo();
      return;
    }

    // If user's message contains "delivery locations" or "locations", call handleDeliveryLocations function from ActionProvider
    if (
      lowerCaseMessage.includes('delivery locations') ||
      lowerCaseMessage.includes('locations')
    ) {
      this.actionProvider.handleDeliveryLocations();
      return;
    }

    // If user's message contains "services", call handleServices function from ActionProvider
    if (lowerCaseMessage.includes('services')) {
      this.actionProvider.handleServices();
      return;
    }

    // If user's message does not match any of the above conditions, send a default message back
    const defaultMessage = this.actionProvider.createChatBotMessage(
      "I'm not sure how to respond to that. Please try asking a different question."
    );
    this.actionProvider.updateChatbotState(defaultMessage);
  }
}

export default MessageParser;
