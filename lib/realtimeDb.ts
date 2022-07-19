import {
  addFirebaseData,
  getFirebaseData,
  updateFirebaseData,
  saveFirebaseData,
} from './firebase';
import { isProdEnv } from 'lib/constant';
const env = isProdEnv ? 'prod' : 'dev';

export const updateReferralCount = async (url: string) => {
  const referralResult = await getFirebaseData(`${env}/landing/referral`);
  const updatedCount = { [url]: referralResult[url] + 1 };
  await updateFirebaseData(`${env}/landing/referral`, updatedCount);

  return updatedCount;
};

export const savedShareCount = async (shareType: string) => {
  const shareResult = await getFirebaseData(`${env}/landing/share`);
  const updatedCount = { [shareType]: shareResult[shareType] + 1 };
  await updateFirebaseData(`${env}/landing/share`, updatedCount);
  return updatedCount;
};
