import type { Message } from "../types/types";

const DEFAULT_MESSAGES: Message[] = [
  // Conversation 1: Client and User 1
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 6),
    fromConnId: "user_id_0",
    toConnId: "user_id_1",
    content: "Hi! How’s it going?",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 5),
    fromConnId: "user_id_0",
    toConnId: "user_id_1",
    content: "Have you finished the report I sent you?",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 10),
    fromConnId: "user_id_0",
    toConnId: "user_id_1",
    content: "Let me know if you need any help with it.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 20),
    fromConnId: "user_id_1",
    toConnId: "user_id_0",
    content: "Hey! I’m doing well, thanks for asking.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 25),
    fromConnId: "user_id_1",
    toConnId: "user_id_0",
    content: "I’m almost done with the report.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 30),
    fromConnId: "user_id_1",
    toConnId: "user_id_0",
    content: "I might need a bit more time, but I’ll manage.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 35),
    fromConnId: "user_id_0",
    toConnId: "user_id_1",
    content: "No worries. Just update me when you’re ready.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 40),
    fromConnId: "user_id_0",
    toConnId: "user_id_1",
    content: "Is there anything else I can help with today?",
  },

  // Conversation 2: Client and User 2
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4),
    fromConnId: "user_id_2",
    toConnId: "user_id_0",
    content: "Hello! I’ve been meaning to ask you about the project.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 5),
    fromConnId: "user_id_2",
    toConnId: "user_id_0",
    content: "Are there any updates on the timeline?",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 10),
    fromConnId: "user_id_2",
    toConnId: "user_id_0",
    content: "I’m eager to get started on the next phase.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 15),
    fromConnId: "user_id_0",
    toConnId: "user_id_2",
    content: "Hi! The project timeline has been updated.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 20),
    fromConnId: "user_id_0",
    toConnId: "user_id_2",
    content: "We’re aiming to start the next phase next week.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 25),
    fromConnId: "user_id_0",
    toConnId: "user_id_2",
    content: "I’ll send out more details soon.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 35),
    fromConnId: "user_id_2",
    toConnId: "user_id_0",
    content: "Great! I’ll be ready for next week.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 40),
    fromConnId: "user_id_2",
    toConnId: "user_id_0",
    content: "Looking forward to it!",
  },

  // Conversation 3: Client and User 3
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2),
    fromConnId: "user_id_0",
    toConnId: "user_id_3",
    content: "Hey! Did you get a chance to review the latest design?",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 + 1000 * 60 * 5),
    fromConnId: "user_id_0",
    toConnId: "user_id_3",
    content: "Let me know your thoughts.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 + 1000 * 60 * 10),
    fromConnId: "user_id_0",
    toConnId: "user_id_3",
    content: "I’m looking forward to your feedback.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 + 1000 * 60 * 15),
    fromConnId: "user_id_3",
    toConnId: "user_id_0",
    content: "Hi! I just started reviewing the design.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 + 1000 * 60 * 20),
    fromConnId: "user_id_3",
    toConnId: "user_id_0",
    content: "It looks good so far, but I have a few suggestions.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 + 1000 * 60 * 25),
    fromConnId: "user_id_3",
    toConnId: "user_id_0",
    content: "I’ll compile them and send them to you soon.",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 + 1000 * 60 * 30),
    fromConnId: "user_id_0",
    toConnId: "user_id_3",
    content: "Sounds good! I’ll wait for your suggestions.",
  },
];

export default DEFAULT_MESSAGES;
