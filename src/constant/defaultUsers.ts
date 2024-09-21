import type { User } from "../types/types";
import DEFAULT_CLIENT from "./defaultClient";

// Static
const DEFAULT_USERS: User[] = [
  DEFAULT_CLIENT,
  {
    id: "85bf35bd-3c27-4292-98bf-9c9e857224d5",
    name: "User 1",
    profileImg:
      "https://fastly.picsum.photos/id/101/200/200.jpg?hmac=8aiHS9K78DvBexQ7ZROLuLizDR22o8CcjRMUhHbZU6g",
  },
  {
    id: "6cb8d912-7574-432e-9922-27b9099cf44f",
    name: "User 2",
    profileImg:
      "https://fastly.picsum.photos/id/201/200/200.jpg?hmac=bDRwJ_w2on8pQ9tbqlqMghsddYlj20LS9E3l3NswK7Q",
  },
  {
    id: "54a2755d-91b3-413c-82f2-3aed7e592c77",
    name: "User 3",
    profileImg:
      "https://fastly.picsum.photos/id/301/200/200.jpg?hmac=8LBy-lxo8NF1vIabeRaqqBVpr2XpkwTzOSpicYy8YSU",
  },
  {
    id: "1bb69bfe-bc3c-469c-8c87-92e739102884",
    name: "User 4",
    profileImg:
      "https://fastly.picsum.photos/id/401/200/200.jpg?hmac=WUK1zTQudJvymN9ZlGGq6GtyuhiPyUgFOrKvKyT5wvc",
  },
  {
    id: "4cf046d6-d310-43ca-ae75-86930d2b744e",
    name: "User 5",
    profileImg:
      "https://fastly.picsum.photos/id/501/200/200.jpg?hmac=tKXe69j4tHhkAA_Qc3XinkTuubEWwkFVhA9TR4TmCG8",
  },
];

export default DEFAULT_USERS;
