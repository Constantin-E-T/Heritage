class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleCompanyInfo() {
    const message = this.createChatBotMessage(
        "Heritage Haulage is a family-run company based in Portsmouth, specializing in Container Transport, Tautliners, and Refrigerated Shipping. We offer personalized, cost-effective transportation and logistics solutions to meet our clients' diverse needs. Our modern fleet ensures reliable and efficient services, ranging from single pallet deliveries to full load shipments."
      );
    this.updateChatbotState(message);
  }

  handlePortsInfo() {
    const message = this.createChatBotMessage(
      "We work with several major ports in the UK, including: \n1. Port of Southampton \n2. Port of Felixstowe \n3. Port of London Gateway \n4. Port of Liverpool \n5. Port of Bristol"
    );
    this.updateChatbotState(message);
  }

  handleDeliveryLocations() {
    const message = this.createChatBotMessage(
      "We deliver to various locations across the UK. Some of the major areas we cover include: \n1. London \n2. Manchester \n3. Birmingham \n4. Glasgow \n5. Leeds \n6. Liverpool"
    );
    this.updateChatbotState(message);
  }

  handleServices() {
    const message = this.createChatBotMessage(
      "Our services include: \n1. Container Transport \n2. Tautliners \n3. Refrigerated Shipping \n4. Full load shipments \n5. Groupage deliveries \n6. Single pallet deliveries"
    );
    this.updateChatbotState(message);
  }

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
