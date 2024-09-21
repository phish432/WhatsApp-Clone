import type { User } from "../types/types";
import { useState } from "react";

function useActiveUser(initialValue: User | null) {
  const [activeUser, setActiveUser] = useState<User | null>(initialValue);

  return { activeUser, setActiveUser };
}

export default useActiveUser;
