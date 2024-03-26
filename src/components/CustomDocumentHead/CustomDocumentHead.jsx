import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useWhiteLabel } from '@hooks';

const CustomDocumentHead = () => {
  const { getWhiteLabelInfo } = useWhiteLabel();
  return (
    <Helmet>
      <title>{getWhiteLabelInfo('companyName')}</title>
      <link 
        rel="icon" 
        href={require(`@assets/images/favicon/${getWhiteLabelInfo('faviconDir')}/favicon.ico`)}
      />
    </Helmet>
  );
}
 
export default CustomDocumentHead;