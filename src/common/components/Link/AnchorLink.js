import { textToHyphenated } from '../../../utils/common';

const AnchorLink = ({ label, url, name, anchor }) => {
  const aAttributes = {};
  if (url) {
    aAttributes['href'] = url
  } else if (anchor) {
    aAttributes['href'] = `#${textToHyphenated(label)}`
  } else if (name) {
    aAttributes['name'] = `${textToHyphenated(label)}`
  }

  return (
    <a {...aAttributes}>{label}</a>
  )
}

export default AnchorLink;