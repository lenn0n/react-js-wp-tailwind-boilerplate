import Axios from 'axios';
import { useCookie, useEncryption } from '@hooks';

const ORIGIN = window.location.origin;
const HOSTNAME = window.location.hostname;

const FRONT_API_ENDPOINTS = Object.freeze({
  admin: `${ORIGIN}/api/admin`,
});

let config = {};
let company = { 
  companyId: '12345', 
  companyName: 'OP Software Dev', 
  styleDir: 'unknown',
  faviconDir: 'opsoftwaredev',
};

if (['admin.nftpaypro.local'].includes(HOSTNAME)) {  // NFT Pay Pro Local
  company['companyId'] = '95';
  company['companyName'] = 'NFT Pay Pro';
  company['styleDir'] = 'npp';
  company['faviconDir'] = 'npp';
}

config['company'] = company;

const axiosInstance = (data) => {
  const { getCookie } = useCookie()
  const { decode } = useEncryption()
  let headers = {}, baseURL = FRONT_API_ENDPOINTS[data.service]

  const getAccessToken = () => {
   try {
    return JSON.parse(decode(getCookie('admin_token')))
   } catch (error) {
    
   }
  }

  if (data.headers) {
    headers = data.headers
  }

  if (data.requiresAuth) {
    if (data.authPrefix) {
      headers['Authorization'] = data.authPrefix + " " + getAccessToken()?.access
    } else {
      headers['Authorization'] = getAccessToken()?.access
    }
  }

  if (data.customAuth){
    headers['Authorization'] = data.customAuth
  }

  if (data?.additionalHeaders) {
    headers = {
      ...headers,
      ...data.additionalHeaders
    };
  }

  return Axios.create({
    baseURL,
    headers
  })
}


export { 
  config,
  axiosInstance
};