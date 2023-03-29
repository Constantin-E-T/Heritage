// This class defines the action provider for the chatbot, which handles user actions and sends appropriate messages.
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    // The constructor takes two arguments: createChatBotMessage function and setState function.
    // createChatBotMessage is used to create messages in response to user actions.
    // setStateFunc is used to update the state of the chatbot.
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  // This function sends a message with information about the company when the user asks about the company.
  handleCompanyInfo() {
    const message = this.createChatBotMessage(
        "Heritage Haulage is a family-run company based in Portsmouth, specializing in Container Transport, Tautliners, and Refrigerated Shipping. We offer personalized, cost-effective transportation and logistics solutions to meet our clients' diverse needs. Our modern fleet ensures reliable and efficient services, ranging from single pallet deliveries to full load shipments."
      );
    this.updateChatbotState(message);
  }
  // This function sends a message with information about the ports the company works with when the user asks about ports.
  handlePortsInfo() {
    const message = this.createChatBotMessage(
      "We work with several major ports in the UK, including: \n1. Port of Southampton \n2. Port of Felixstowe \n3. Port of London Gateway \n4. Port of Liverpool \n5. Port of Bristol"
    );
    this.updateChatbotState(message);
  }
  // This function sends a message with information about the delivery locations when the user asks about delivery locations.
  handleDeliveryLocations() {
    const message = this.createChatBotMessage(
      "We deliver to various locations across the UK. Some of the major areas we cover include: \n1. London \n2. Manchester \n3. Birmingham \n4. Glasgow \n5. Leeds \n6. Liverpool"
    );
    this.updateChatbotState(message);
  }
  // This function sends a message with information about the services provided by the company when the user asks about services.
  handleServices() {
    const message = this.createChatBotMessage(
      "Our services include: \n1. Container Transport \n2. Tautliners \n3. Refrigerated Shipping \n4. Full load shipments \n5. Groupage deliveries \n6. Single pallet deliveries"
    );
    this.updateChatbotState(message);
  }
  // This function updates the state of the chatbot with the message sent to the user and checks if the message has an ID.
  // If the message does not have an ID, it calls handleTopics function.
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }), () => {
      if (!message.id) {
        this.handleTopics();
      }
    });
  }
}

export default ActionProvider;
