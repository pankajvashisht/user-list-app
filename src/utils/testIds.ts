export const setTestIdentifier = (
  id?: string,
): {testID: string; accessibilityLabel: string} | object => {
  if (!id) {
    return {};
  }
  return {testID: id, accessibilityLabel: id};
};

export const testIdSelectSlot = 'selected-dot';
export const activityIndicator = 'ActivityIndicator';
export const flatList = 'FlatList';
