import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const NormalizePhoneNumber = (value: string): string => {
    const phoneNum = parsePhoneNumberFromString(value);
    if (!phoneNum) {
      return value;
    }
    return phoneNum.formatInternational();
  };