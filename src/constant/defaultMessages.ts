import type { Message } from "../types/types";

import { v4 as uuid } from "uuid";

const DEFAULT_MESSAGES: Message[] = [
  // Conversation 1: Client (User 0) and User 1
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 6),
    content: "Hi! How’s it going?",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 5,
    ),
    content: "Have you finished the report I sent you?",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 10,
    ),
    content: "Let me know if you need any help with it.",
  },
  {
    id: uuid(),
    fromUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 20,
    ),
    content: "Hey! I’m doing well, thanks for asking.",
  },
  {
    id: uuid(),
    fromUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 25,
    ),
    content: "I’m almost done with the report.",
  },
  {
    id: uuid(),
    fromUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 30,
    ),
    content: "I might need a bit more time, but I’ll manage.",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 35,
    ),
    content: "No worries. Just update me when you’re ready.",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "85bf35bd-3c27-4292-98bf-9c9e857224d5", // User 1
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 5 + 1000 * 60 * 40,
    ),
    content: "Is there anything else I can help with today?",
  },

  // Conversation 2: Client (User 0) and User 2
  {
    id: uuid(),
    fromUserId: "6cb8d912-7574-432e-9922-27b9099cf44f", // User 2
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 4),
    content: "Hello! I’ve been meaning to ask you about the project.",
  },
  {
    id: uuid(),
    fromUserId: "6cb8d912-7574-432e-9922-27b9099cf44f", // User 2
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 5,
    ),
    content: "Are there any updates on the timeline?",
  },
  {
    id: uuid(),
    fromUserId: "6cb8d912-7574-432e-9922-27b9099cf44f", // User 2
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 10,
    ),
    content: "I’m eager to get started on the next phase.",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "6cb8d912-7574-432e-9922-27b9099cf44f", // User 2
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 15,
    ),
    content: "Hi! The project timeline has been updated.",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "6cb8d912-7574-432e-9922-27b9099cf44f", // User 2
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 4 + 1000 * 60 * 20,
    ),
    content: "I’ll send you the details shortly.",
  },

  // Conversation 3: Client (User 0) and User 3
  {
    id: uuid(),
    fromUserId: "54a2755d-91b3-413c-82f2-3aed7e592c77", // User 3
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 3),
    content: "Hi there! Can we schedule a meeting for tomorrow?",
  },
  {
    id: uuid(),
    fromUserId: "54a2755d-91b3-413c-82f2-3aed7e592c77", // User 3
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 3 + 1000 * 60 * 5,
    ),
    content: "I’d like to discuss the progress on the new feature.",
  },
  {
    id: uuid(),
    fromUserId: "54a2755d-91b3-413c-82f2-3aed7e592c77", // User 3
    toUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 3 + 1000 * 60 * 10,
    ),
    content: "Let me know your availability.",
  },
  {
    id: uuid(),
    fromUserId: "3c3f6626-3a37-48b2-8c6d-dfa407f4e7b0", // Client (User 0)
    toUserId: "54a2755d-91b3-413c-82f2-3aed7e592c77", // User 3
    timestamp: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 3 + 1000 * 60 * 15,
    ),
    content: "Hi! I’m available in the afternoon. Does 2 PM work for you?",
  },
];

export default DEFAULT_MESSAGES;
