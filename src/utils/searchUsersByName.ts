import type { UserMessagePreview } from "../types/types";

function searchPreviewsByUserName(
  previews: UserMessagePreview[],
  searchTerm: string,
) {
  const searchResults = previews.filter((preview) => {
    const userNameSanitized = preview.user.name.toLowerCase();
    const searchTermSanitized = searchTerm.trim().toLowerCase();
    return userNameSanitized.includes(searchTermSanitized);
  });

  return searchResults;
}

export default searchPreviewsByUserName;
