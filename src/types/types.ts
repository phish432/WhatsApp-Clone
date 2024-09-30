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
  readonly latestMsg?: {
    readonly sender: string;
    readonly content: string;
    readonly time: string;
  };
};

type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "REMOVE_USER"; payload: User["id"] };

type MessageAction =
  | { type: "ADD_MESSAGE"; payload: Message }
  | { type: "REMOVE_MESSAGE"; payload: Message["id"] }
  | {
      type: "REMOVE_CONVERSATION";
      payload: { userAId: User["id"]; userBId: User["id"] };
    }
  | {
      type: "UPDATE_MESSAGE";
      payload: { id: Message["id"]; newContent: Message["content"] };
    };

export type { User, Message, UserMessagePreview, UserAction, MessageAction };
