import { useCallback } from 'react';
import ReactGA from 'react-ga';
import { goTo } from '../../../utils/common';
import { PAGE_TAGS } from '../../../utils/contants';

const ExternalLink = ({ children, url }) => {
  const navigateToExternalSite = useCallback((e) => {
    e.preventDefault();

    ReactGA.outboundLink(
      {
        label: `Clicked ${children}`
      },
      function () {
        goTo(url)
      },
      [PAGE_TAGS.ExternalLink]
    );
    
  }, [url])

  return (
    <a href="#" onClick={navigateToExternalSite} target="_blank">{children}</a>
  )
}

export default ExternalLink;