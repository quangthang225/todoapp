import React from 'react';
import { AsyncStorage } from 'react-native';

const ONBOARDING_ENABLED = 'ONBOARDING_ENABLED';
const USER = 'USER';
const USER_LANGUAGE = 'USER_LANGUAGE';

const savePreference = async (key, value) => {
  await AsyncStorage.setItem(key, value || '', () => { });
}

const getPreference = async (key) => {
  return await AsyncStorage.getItem(key, () => { });
}

export const saveOnboardingEnabled = async (value) => {
  await savePreference(ONBOARDING_ENABLED, value);
}

export const getOnboardingEnabled = async () => {
  let value = await getPreference(ONBOARDING_ENABLED);
  return value === 'true';
}

export const saveUser = async (value) => {
  var userJson = JSON.stringify(value)
  await savePreference(USER, userJson);
}

export const getUser = async () => {
  let userJson = await getPreference(USER);
  const user = JSON.parse(userJson);
  return user;
}

export const updateLanguage = async (lang) => { 
  await savePreference(USER_LANGUAGE, lang); 
};

export const getLanguage = async () => {
  const lang = await getPreference(USER_LANGUAGE);
  return lang;
};