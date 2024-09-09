type Connection = {
  readonly id: string;
  readonly name: string;
  readonly profileImg: string;
};

const CONNECTIONS: Connection[] = [
  {
    id: "user_id_1",
    name: "User 1",
    profileImg:
      "https://fastly.picsum.photos/id/101/200/200.jpg?hmac=8aiHS9K78DvBexQ7ZROLuLizDR22o8CcjRMUhHbZU6g",
  },
  {
    id: "user_id_2",
    name: "User 2",
    profileImg:
      "https://fastly.picsum.photos/id/201/200/200.jpg?hmac=bDRwJ_w2on8pQ9tbqlqMghsddYlj20LS9E3l3NswK7Q",
  },
  {
    id: "user_id_3",
    name: "User 3",
    profileImg:
      "https://fastly.picsum.photos/id/301/200/200.jpg?hmac=8LBy-lxo8NF1vIabeRaqqBVpr2XpkwTzOSpicYy8YSU",
  },
  {
    id: "user_id_4",
    name: "User 4",
    profileImg:
      "https://fastly.picsum.photos/id/401/200/200.jpg?hmac=WUK1zTQudJvymN9ZlGGq6GtyuhiPyUgFOrKvKyT5wvc",
  },
  {
    id: "user_id_5",
    name: "User 5",
    profileImg:
      "https://fastly.picsum.photos/id/501/200/200.jpg?hmac=tKXe69j4tHhkAA_Qc3XinkTuubEWwkFVhA9TR4TmCG8",
  },
];

export type { Connection };
export default CONNECTIONS;
