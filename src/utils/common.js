export const goTo = (url) => {
  if (isWindow()) {
    window.open(url, '_blank')
  }
}

export const isWindow = () => {
  return (typeof window !== 'undefined');
}

export const textToHyphenated = (title) => {
  const hyphenated = title.replace(/\s+/g, '-')
  return hyphenated.toLowerCase();
}
