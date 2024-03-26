import { useCallback } from 'react';
import { config } from '@utils/config';

const useWhiteLabel = () => {
  const getWhiteLabelInfo = useCallback((param = '') => {
    if (param == '') {
      return config?.['company'] ?? {};
    }

    return config?.['company']?.[param] ?? '';
  }, [])

  return {
    getWhiteLabelInfo,
  };
}

export default useWhiteLabel;