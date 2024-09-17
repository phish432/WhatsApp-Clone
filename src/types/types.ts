type Connection = {
  readonly id: string;
  readonly name: string;
  readonly profileImg: string;
};

type ConnectionWithPreview = {
  readonly connection: Connection;
  readonly latestMessage: Message | null;
};

type Message = {
  readonly messageId: ReturnType<typeof self.crypto.randomUUID>;
  readonly timestamp: Date;
  readonly fromConnId: string;
  readonly toConnId: string;
  readonly content: string;
};

export type { Connection, ConnectionWithPreview, Message };
