import type { Connection } from "../types/types";

function getConnectionsBySearch(connections: Connection[], searchTerm: string) {
  const searchResults = connections.filter((connection) => {
    const name = connection.name.toLowerCase();
    const search = searchTerm.trim().toLowerCase();
    return name.includes(search);
  });

  return searchResults;
}

export default getConnectionsBySearch;
