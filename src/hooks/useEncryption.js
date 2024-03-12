import CryptoJS from "crypto-js";

const useEncryption = () => {
   const encode = (text) => {
    try {
      if (text == undefined || text == null || text == '') {
        return '';
      }
  
      return CryptoJS.AES.encrypt(text, String(process.env.SECRET_KEY)).toString();
    } catch (error) {
      console.log('UNABLE_TO_ENCODE_STRING: ' + error);
      return '';
    }
  }
  
   const decode = (text) => {
    try {
      if (text === undefined || text === null || text === '' || text === 'undefined') {
        return '';
      }
      
      let bytes =  CryptoJS.AES.decrypt(text, String(process.env.SECRET_KEY));
      return bytes.toString(CryptoJS.enc.Utf8) || '';
    } catch (error) {
      console.log('UNABLE_TO_DECODE_STRING: ' + error);
      return '';
    }
  }

  return {
    encode,
    decode
  }
}

export default useEncryption