import AsyncStorage from '@react-native-async-storage/async-storage';

export function setUnsecureStorageItem(key: string, value: unknown) {
  if (!key || !value) {
    return Promise.reject('key-value pair is required');
  }
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getUnsecureStorageItem<T = unknown>(key: string): Promise<T | null> {
  if (!key) {
    return Promise.reject('key is required');
  }

  try {
    const result = await AsyncStorage.getItem(key);
    if (!result) {
      return null;
    }
    return JSON.parse(result) as T;
  } catch (error) {
    console.error('Error getting unsecure storage item:', error);
    return null;
  }
}
