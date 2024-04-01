export const getRaw = (result: any, value: any) => {
  if (!result[value] || !result[value].raw) return;
  return result[value].raw;
};

export const getSnippet = (result: any, value: any) => {
  if (!result[value] || !result[value].snippet) return;
  return result[value].snippet;
};

export const getSuggestionTitle = (
  suggestionType: any,
  autocompleteSuggestions: any
) => {
  if (autocompleteSuggestions.sectionTitle) {
    return autocompleteSuggestions.sectionTitle;
  }

  if (
    autocompleteSuggestions[suggestionType] &&
    autocompleteSuggestions[suggestionType].sectionTitle
  ) {
    return autocompleteSuggestions[suggestionType].sectionTitle;
  }
};

export const getSuggestionDisplayField = (
  suggestionType: any,
  autocompleteSuggestions: any
) => {
  if (autocompleteSuggestions.queryType === 'results') {
    return autocompleteSuggestions.displayField;
  }

  if (
    autocompleteSuggestions[suggestionType] &&
    autocompleteSuggestions[suggestionType].queryType === 'results'
  ) {
    return autocompleteSuggestions[suggestionType].displayField;
  }
};
