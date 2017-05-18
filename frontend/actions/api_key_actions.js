import { fetchCloudinaryKeys } from '../util/api_key_util';

export const RECIEVE_CLOUDINARY_KEYS = "RECIEVE_CLOUDINARY_KEYS";

export const recieveCloudinaryKeys = (cloudinary_keys) => {
  return  {
  type: RECIEVE_CLOUDINARY_KEYS,
  cloudinary_keys
}};

export const requestCloudinaryKeys = () => (dispatch) => {
  return fetchCloudinaryKeys().then((res)=> {
    return (dispatch(recieveCloudinaryKeys(res)))});
}
