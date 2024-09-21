import type { User } from "../types/types";

function searchUsersByName(users: User[], searchTerm: string) {
  const searchResults = users.filter((user) => {
    const userNameSanitized = user.name.toLowerCase();
    const searchTermSanitized = searchTerm.trim().toLowerCase();
    return userNameSanitized.includes(searchTermSanitized);
  });

  return searchResults;
}

export default searchUsersByName;
