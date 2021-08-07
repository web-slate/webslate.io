export const goTo = (url) => {
  if (isWindow()) {
    window.open(url, '_blank')
  }
}

export const isWindow = () => {
  return (typeof window !== 'undefined');
}