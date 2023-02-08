import { textToHyphenated } from '../../../utils/common';

const AnchorLink = ({ label, url, name, anchor }) => {
  const aAttributes = {};
  if (url) {
    aAttributes['href'] = url
  } else if (anchor) {
    aAttributes['href'] = `#${textToHyphenated(label)}`
  } else if (name) {
    aAttributes['name'] = (typeof name === 'boolean') ? `${textToHyphenated(label)}` : name;
  }

  return (
    <a {...aAttributes}>{label}</a>
  )
}

export default AnchorLink;