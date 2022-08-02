export const useDisableScroll = () => {
  const setDisableScroll = (isVisible) => {
    if (isVisible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }
  return { setDisableScroll }
};
