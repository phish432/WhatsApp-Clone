type Message = {
  readonly messageId: ReturnType<typeof self.crypto.randomUUID>;
  readonly timestamp: Date;
  readonly fromConnId: string | null;
  readonly toConnId: string | null;
  readonly content: string;
};

const DEFAULT_MESSAGES: Message[] = [
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(),
    fromConnId: "user_id_1",
    toConnId: null,
    content: "Hello!",
  },
  {
    messageId: self.crypto.randomUUID(),
    timestamp: new Date(),
    fromConnId: null,
    toConnId: "user_id_1",
    content: "Hi!",
  },
];

export type { Message };
export default DEFAULT_MESSAGES;
