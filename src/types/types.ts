type UniqueId = ReturnType<typeof self.crypto.randomUUID>;

type User = {
  readonly id: UniqueId;
  readonly name: string;
  readonly profileImg: string;
};

type Message = {
  readonly id: UniqueId;
  readonly fromUserId: UniqueId;
  readonly toUserId: UniqueId;
  readonly timestamp: Date;
  readonly content: string;
};

type UserMessagePreview = {
  readonly user: User;
  readonly latestMessage: Message | null;
};

export type { UniqueId, User, Message, UserMessagePreview };
